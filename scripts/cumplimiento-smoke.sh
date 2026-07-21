#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

# RED smoke checks. Run manually against a server started with the documented
# environment; this file is intentionally not executed during implementation.
#
# Flag-off server (restart after changing the variable):
#   NEXT_PUBLIC_FEATURE_CUMPLIMIENTO=false bun run dev
#   ./scripts/cumplimiento-smoke.sh flag-off
# Expected: GET /cumplimiento returns 404 and the navigation has no link.
#
# Flag-on server:
#   NEXT_PUBLIC_FEATURE_CUMPLIMIENTO=true bun run dev
#   ./scripts/cumplimiento-smoke.sh flag-on
# Expected: GET /cumplimiento returns 200 and the landing sections render.

mode="${1:-flag-on}"

case "$mode" in
  flag-off)
    status="$(curl --silent --output /dev/null --write-out '%{http_code}' "$BASE_URL/cumplimiento")"
    test "$status" = "404"
    ;;
  flag-on)
    status="$(curl --silent --output /dev/null --write-out '%{http_code}' "$BASE_URL/cumplimiento")"
    test "$status" = "200"
    ;;
  api)
    honeypot_status="$(curl --silent --output /dev/null --write-out '%{http_code}' \
      --request POST "$BASE_URL/api/cumplimiento/diagnostico" \
      --header 'content-type: application/json' \
      --data '{"email":"bot@example.com","website":"https://spam.invalid"}')"
    test "$honeypot_status" = "400"

    valid_response="$(curl --silent --request POST "$BASE_URL/api/cumplimiento/diagnostico" \
      --header 'content-type: application/json' \
      --data '{"email":"persona@example.com","website":""}')"
    test "$valid_response" = '{"ok":true}'
    ;;
  *)
    printf 'Usage: %s [flag-off|flag-on|api]\n' "$0" >&2
    exit 2
    ;;
esac

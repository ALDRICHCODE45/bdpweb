#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

# Smoke checks for /cumplimiento. Run manually against a local dev server.
# Usage: ./scripts/cumplimiento-smoke.sh [page|api]

mode="${1:-page}"

case "$mode" in
  page)
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
    printf 'Usage: %s [page|api]\n' "$0" >&2
    exit 2
    ;;
esac
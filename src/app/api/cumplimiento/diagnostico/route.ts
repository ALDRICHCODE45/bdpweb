export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ ok: false }, { status: 400 });
    }

    const honeypot = (body as { website?: unknown }).website;
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return Response.json({ ok: false }, { status: 400 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
}

export default function handler(req, res) {
  const email = req.query.email || "email-not-provided";

  // Validar que sea un email sencillo
  if (!email.includes("@")) {
    return res.status(400).json({ ok: false, message: "Email inválido" });
  }

  res.status(200).json({
    ok: true,
    message: "Correo recibido correctamente",
    email: email
  });
}

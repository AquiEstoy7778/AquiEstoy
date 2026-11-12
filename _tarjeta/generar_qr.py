import os
import qrcode
from urllib.parse import quote

BASE = r"C:\Users\agent\Downloads\pagina web"
OUT = os.path.join(BASE, "_tarjeta")
os.makedirs(OUT, exist_ok=True)

numero = "584124090996"
mensaje = "Hola AquiEstoy"
url = f"https://wa.me/{numero}?text={quote(mensaje)}"

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_M,
    box_size=24,
    border=3,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="#1F2325", back_color="#FFFFFF")
destino = os.path.join(OUT, "qr-whatsapp.png")
img.save(destino)

print("URL:", url)
print("Guardado:", destino, img.size)

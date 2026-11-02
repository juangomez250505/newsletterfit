import json
import re
import sys
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

host = "getnewsletterfit.com"
paths = sys.argv[1:]

if not paths:
    raise SystemExit("Indica las rutas actualizadas.")

keys = [
    p for p in Path("public").glob("*.txt")
    if re.fullmatch(r"[a-f0-9]{32}", p.stem)
    and p.read_text().strip() == p.stem
]

if len(keys) != 1:
    raise SystemExit("No se encontro una clave unica.")

key = keys[0].stem
key_url = f"https://{host}/{key}.txt"

try:
    with urlopen(key_url, timeout=20) as response:
        if response.read().decode().strip() != key:
            raise SystemExit("La clave publicada no coincide.")
except (HTTPError, URLError) as error:
    raise SystemExit(
        f"Clave aun no disponible: {error}. Revisa Vercel."
    )

urls = []
for path in paths:
    if not path.startswith("/") or any(
        x in path for x in ["?", "#", " "]
    ):
        raise SystemExit(f"Ruta no valida: {path}")
    url = f"https://{host}{path}"
    if url not in urls:
        urls.append(url)

payload = {
    "host": host,
    "key": key,
    "keyLocation": key_url,
    "urlList": urls
}

request = Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode(),
    headers={"Content-Type": "application/json"},
    method="POST"
)

try:
    with urlopen(request, timeout=20) as response:
        print(f"IndexNow HTTP {response.status}")
        print(f"URLs enviadas: {len(urls)}")
except HTTPError as error:
    raise SystemExit(f"IndexNow HTTP {error.code}")

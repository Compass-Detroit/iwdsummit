import urllib.request, json, ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
url = "https://gdg.community.dev/api/event/60902/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx) as response:
        data = json.loads(response.read().decode())
        sponsors = data.get('sponsors', [])
        for s in sponsors:
            print(f"Name: {s.get('name')}")
            print(f"Url: {s.get('url')}")
            print(f"Logo: {s.get('logo_url')}")
            print(f"Description: {s.get('description', '')[:100]}")
            print("---")
except Exception as e:
    print(f"Error: {e}")

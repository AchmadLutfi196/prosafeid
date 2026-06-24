import urllib.request
import re
import os

os.makedirs('public/images/clients', exist_ok=True)

url = 'https://brandfetch.com/adaro.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8')
        print("Fetched Brandfetch page successfully.")
        # Find all asset.brandfetch.io links
        links = re.findall(r'https://asset\.brandfetch\.io/[a-zA-Z0-9_-]+/[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+', html)
        if links:
            # Sort by png first, then svg, then jpg
            png_links = [l for l in links if l.endswith('.png')]
            svg_links = [l for l in links if l.endswith('.svg')]
            all_sorted = png_links + svg_links + links
            
            target_url = all_sorted[0]
            print(f"Found logo URL: {target_url}")
            
            # Download it
            img_req = urllib.request.Request(target_url, headers=headers)
            with urllib.request.urlopen(img_req) as img_resp:
                img_data = img_resp.read()
                ext = target_url.split('.')[-1].lower()
                output_path = f"public/images/clients/adaro.{ext}"
                with open(output_path, 'wb') as f:
                    f.write(img_data)
                print(f"SUCCESS! Saved to {output_path}")
        else:
            print("No brandfetch asset links found in HTML.")
except Exception as e:
    print(f"Error fetching: {e}")

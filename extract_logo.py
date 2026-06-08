import re

file_path = "C:/Users/saro_/Desktop/tarjeta_sagitario_codigo_completo.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the base64 image source
match = re.search(r'src="(data:image/jpeg;base64,[^"]+)"', content)
if match:
    base64_data = match.group(1)
    print("Successfully found base64 logo data!")
    print(f"Length: {len(base64_data)} characters")
    
    # Save base64 to a temporary text file so we can read it easily
    with open("logo_base64.txt", "w", encoding="utf-8") as out:
        out.write(base64_data)
    print("Saved logo to logo_base64.txt")
else:
    print("Could not find base64 logo data in the file!")

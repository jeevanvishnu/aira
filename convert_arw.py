import os
import rawpy
from PIL import Image

input_dir = r"c:\Users\jeeva\OneDrive\Documents\aira-jewels\src\assetss\baby"

for filename in os.listdir(input_dir):
    if filename.lower().endswith('.arw'):
        path = os.path.join(input_dir, filename)
        webp_path = os.path.join(input_dir, os.path.splitext(filename)[0] + '.webp')
        
        if os.path.exists(webp_path):
            print(f"Skipping {filename}, webp already exists.")
            continue
            
        print(f"Converting {filename} to WEBP...")
        try:
            with rawpy.imread(path) as raw:
                # Postprocess the raw image to a numpy array
                # use_camera_wb for correct colors, half_size to save memory/time since we resize anyway
                rgb = raw.postprocess(use_camera_wb=True, half_size=True) 
                
                # Convert to PIL Image
                img = Image.fromarray(rgb)
                
                # Resize if necessary (e.g., max width 1400)
                max_width = 1400
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int((float(img.height) * float(ratio)))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                # Save as WEBP
                img.save(webp_path, 'WEBP', quality=82)
                print(f"Saved {webp_path}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

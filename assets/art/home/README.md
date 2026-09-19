# Footer ASCII

`skyline.txt` is the editable character grid rendered by `assets/js/footer-ascii.js`.
Keep its spaces and line breaks intact. The font and colours are set by
`.footer-ascii-text` in `assets/css/personal.css`.

This is a reconstruction from `image copy.png`, not the original ASCII export.
It was generated with the existing local `ascii-art-artgen-engine/image_to_ascii.py`
converter at WIDTH=480, CHARS='@@MM##++ ', REMOVE_NOISE=0, SPACE_THRESHOLD=245,
INTENSIFY=1. The denser character palette compensates for converting an already
rasterised ASCII image a second time.

The browser renders real text and fits the grid into the original image's aspect
ratio. It inherits the site's light/dark colours. The original PNGs remain as
fallbacks when JavaScript or the text request is unavailable.

nathanrsmith.github.io
======================

    git clone -b build https://github.com/NathanRSmith/nathanrsmith.github.io.git
    uv pip install -r requirements.txt
    npm install
    uv run build.py
    uv run python -m http.server --directory build 8000
    open http://localhost:8000

clickety clack

    uv run ghp-import -npb master build/

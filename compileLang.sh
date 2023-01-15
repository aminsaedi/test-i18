!#/bin/bash

npm run compile -- locale/en.json --ast --out-file src/compiled-lang/en.json --format lokalise
npm run compile -- locale/fr.json --ast --out-file src/compiled-lang/fr.json --format lokalise
npm run compile -- locale/fa.json --ast --out-file src/compiled-lang/fa.json --format lokalise
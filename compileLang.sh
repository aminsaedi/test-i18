!#/bin/bash

npm run compile -- lang/en.json --ast --out-file src/compiled-lang/en.json --format lokalise
npm run compile -- lang/fr.json --ast --out-file src/compiled-lang/fr.json --format lokalise
npm run compile -- lang/fa.json --ast --out-file src/compiled-lang/fa.json --format lokalise
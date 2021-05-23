# Env

Create .env that sets environment variables.

## API KEY

DICT_API_KEY

## CACHE FILE

Set CACHE_FILE to use an alternate cache file. Otherwise, it's ./flash_gen_cache.

# API Notes

[https://www.dictionaryapi.com/products/json#sec-7](https://www.dictionaryapi.com/products/json#sec-7)

The URL:

https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key


Noteworthy things:

* `meta`
* `meta.lang` - whether it's english (en) or spanish (es)
* `meta.stems` - an array of other defs that match the current one
* `meta.offensive` - a word with a label of offensive
* `meta.syns` synonyms -
* `meta.ants` antonyms -
* `hwi.hw` headword - the main word (not necessarily what was searched for)
* `hwi.prs` pronunciations - a list of pronunciation details, possible audio clips
* `fl` functional label - The function label, 'noun', 'adjective', 'verb' for example

# Notes:

## Contractions

*pa'* = *para* sometimes

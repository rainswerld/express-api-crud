curl "http://localhost:4741/books/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--data '{
  "book": {
    "title": "'"${TITLE}"'",
    "author": "'"${AUTHOR}"'"
  }
}'

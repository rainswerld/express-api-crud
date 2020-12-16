curl "http://localhost:4741/books/${ID}/reviews/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "review": {
      "content": "'"${CONTENT}"'"
    }
  }'

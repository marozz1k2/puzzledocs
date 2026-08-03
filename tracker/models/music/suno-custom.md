# suno: свой текст и стиль

Кастомный режим подходит, когда нужно отдельно передать текст песни, стиль и название. Стоимость — `💠30`.

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно.
  "token": "[Ваш API-токен]", // обязательно.
  "user": "{{USER_ID_TEXT}}", // обязательно.
  "model": "suno", // обязательно.
  "action": "generate", // создать песню.
  "mv": "chirp-v5-5", // версия Suno.
  "prompt": "{{lyrics}}", // свой текст песни.
  "custom": true, // включить кастомный режим.
  "title": "{{song_title}}", // название.
  "tags": "indie pop, warm vocal, summer", // стиль и настроение.
  "negative_tags": "noise, clipping", // что исключить.
  "instrumental": false // true для трека без вокала.
}
```

Не добавляйте пустые поля: для инструментала достаточно описания, стиля и `instrumental=true`.

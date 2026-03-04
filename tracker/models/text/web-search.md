# web_search

Модель с поисковым сценарием для ответов с актуальным контекстом.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Найди последние новости по теме AI regulation",
  "bot": "web_search",
  "user": "user_123",
  "params": {
    "region": "ru"
  },
  "send_answer": true
}
```

### Пример ответа

```json
{
  "ok": true,
  "result": "Готово"
}
```

## Параметры

- `prompt` / `text` / `query` / `data` (string, required) — текст запроса.
- `bot` (string, required) — идентификатор модели (`web_search`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `params` (object, optional) — дополнительные настройки модели.
- `send_answer` (boolean, optional) — отправлять ответ в чат (`true` по умолчанию).
- `error_command` / `errorCommand` (string, optional) — команда для отправки ошибки.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

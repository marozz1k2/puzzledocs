# gpt_5_mini

Ускоренная версия GPT‑5 для массовых коротких задач.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "gpt_5_mini",
  "user": "user_123"
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
- `bot` (string, required) — идентификатор модели (`gpt_5_mini`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `params` (object, optional) — дополнительные настройки модели.
- `send_answer` (boolean, optional) — отправлять ответ в чат (`true` по умолчанию).
- `error_command` / `errorCommand` (string, optional) — команда для отправки ошибки.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

# gemini_2_5_pro

Сильная модель для аналитики и длинного контекста.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "gemini_2_5_pro",
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
- `bot` (string, required) — идентификатор модели (`gemini_2_5_pro`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `params` (object, optional) — дополнительные настройки модели.
- `send_answer` (boolean, optional) — отправлять ответ в чат (`true` по умолчанию).
- `error_command` / `errorCommand` (string, optional) — команда для отправки ошибки.

## Tracker payload

- Общие поля `payload` и актуальные алиасы (`model`, `prompt`, `params`, `images`, `video_url` и др.) описаны в [единой документации](../../TRACKER_PAYLOAD.md).
- Разрешённые `params`, дефолты и правила нормализации для этой модели смотрите в разделе с её ключом в [единой документации](../../TRACKER_PAYLOAD.md).

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

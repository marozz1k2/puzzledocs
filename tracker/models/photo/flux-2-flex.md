# flux_2_flex

Гибкая модель для контролируемой генерации изображения.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "flux_2_flex",
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

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`flux_2_flex`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — по умолчанию `2k`.
- `params.aspect_ratio` (string, optional) — по умолчанию `auto`.

## Tracker payload

- Общие поля `payload` и актуальные алиасы (`model`, `prompt`, `params`, `images`, `video_url` и др.) описаны в [единой документации](../../TRACKER_PAYLOAD.md).
- Разрешённые `params`, дефолты и правила нормализации для этой модели смотрите в разделе с её ключом в [единой документации](../../TRACKER_PAYLOAD.md).

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

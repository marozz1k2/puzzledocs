# kling_image

Модель для детализированных кадров и предметных сцен.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "kling_image",
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
- `bot` (string, required) — идентификатор модели (`kling_image`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — `1k` или `2k`, по умолчанию `1k`.
- `params.aspect_ratio` (string, optional) — по умолчанию `auto` (для `kling-o1-image` без `auto`, дефолт `16:9`).
- `params.seed` (integer, optional) — только целое число `>= 0`.

## Tracker payload

- Общие поля `payload` и актуальные алиасы (`model`, `prompt`, `params`, `images`, `video_url` и др.) описаны в [единой документации](../../TRACKER_PAYLOAD.md).
- Разрешённые `params`, дефолты и правила нормализации для этой модели смотрите в разделе с её ключом в [единой документации](../../TRACKER_PAYLOAD.md).

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

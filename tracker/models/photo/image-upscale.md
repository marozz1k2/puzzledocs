# image_upscale

Увеличение разрешения и улучшение детализации изображения.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "image_upscale",
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

- `prompt` (string, optional) — описание желаемого улучшения.
- `bot` (string, required) — идентификатор модели (`image_upscale`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, required) — минимум одно входное изображение.
- `params.scale_factor` (string, optional) — `1x`, `2x`, `4x`, `8x`; по умолчанию `1x`.
- `params.upscale_preset` (string, optional) — `standard`, `high-fidelity`, `text-refine`, `art-cg`, `low-res`; по умолчанию `standard`.
- `params.denoise` (number, optional) — диапазон `[0..1]`, по умолчанию `0.2`.
- `params.sharpen` (number, optional) — диапазон `[0..1]`, по умолчанию `0.3`.
- `params.seed` (integer, optional) — только целое число `>= 0`.
- `params.face_enhancement` (object, optional): `enabled` (boolean), `creativity` `[0..1]` (дефолт `0.3`), `strength` `[0..1]` (дефолт `0.8`).

## Tracker payload

- Общие поля `payload` и актуальные алиасы (`model`, `prompt`, `params`, `images`, `video_url` и др.) описаны в [единой документации](../../TRACKER_PAYLOAD.md).
- Разрешённые `params`, дефолты и правила нормализации для этой модели смотрите в разделе с её ключом в [единой документации](../../TRACKER_PAYLOAD.md).

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

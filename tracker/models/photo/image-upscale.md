# image_upscale

Увеличение разрешения и улучшение детализации изображения.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "image_upscale",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "image_upscale",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "business_operator": "{{BUSINESS_OPERATOR_USER_ID_TEXT}}",
  "business_connection": "{{BUSINESS_CONNECTION_ID}}",
  "images": [
    "https://example.com/source.jpg"
  ],
  "params": {
    "scale_factor": "4x",
    "upscale_preset": "high-fidelity",
    "denoise": 0.2,
    "sharpen": 0.3,
    "seed": 42,
    "face_enhancement": {
      "enabled": true,
      "creativity": 0.3,
      "strength": 0.8
    }
  }
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовое изображение."
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

## Параметры запроса

- `bot` — имя бота/модели в Puzzle AI (например, `gpt_5`, `sora`, `gpt_image`).
- `token` — API-токен вашего бота для входящих запросов.
- `user` — ID пользователя, который написал сообщение.
- `model` — ключ нейросети, которую нужно вызвать.
- `prompt` — текст задачи для нейросети.
- `role` — дополнительная инструкция по стилю ответа (необязательно).
- `business_operator` — ID оператора бизнес-аккаунта (для бизнес-ответов).
- `business_connection` — ID соединения бизнес-аккаунта.
- `params` — объект дополнительных настроек конкретной модели (если поддерживается).
- `images` / `video_url` — входные медиа для image/video-сценариев.
- `send_answer` — отправлять результат в чат (`true` по умолчанию).
- `error_command` — команда, которая вызывается при ошибке.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

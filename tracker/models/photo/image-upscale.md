# image_upscale

Увеличение разрешения и улучшение детализации изображения.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "{{BOT_USERNAME_TEXT}}",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "image_upscale",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "images": "https://example.com/source.jpg,https://example.com/reference-2.jpg",
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
- `bot` (string, required) — username бота, всегда передавайте `{{BOT_USERNAME_TEXT}}`.
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (string, required) — минимум одно входное изображение.
- `params.scale_factor` (string, optional) — `1x`, `2x`, `4x`, `8x`; по умолчанию `1x`.
- `params.upscale_preset` (string, optional) — `standard`, `high-fidelity`, `text-refine`, `art-cg`, `low-res`; по умолчанию `standard`.
- `params.denoise` (number, optional) — диапазон `[0..1]`, по умолчанию `0.2`.
- `params.sharpen` (number, optional) — диапазон `[0..1]`, по умолчанию `0.3`.
- `params.seed` (integer, optional) — только целое число `>= 0`.
- `params.face_enhancement` (object, optional): `enabled` (boolean), `creativity` `[0..1]` (дефолт `0.3`), `strength` `[0..1]` (дефолт `0.8`).

## Параметры запроса

| Ключ | Значение | Описание |
| --- | --- | --- |
| `bot` | `{{BOT_USERNAME_TEXT}}` | Username бота в PuzzleBot (всегда используйте переменную). |
| `token` | `[Ваш API-токен]` | API-токен бота для авторизации запроса. |
| `user` | `{{USER_ID_TEXT}}` | Идентификатор пользователя/сессии. |
| `model` | ключ модели (например, `gpt_5`) | Технический идентификатор модели, которую нужно вызвать. |
| `prompt` | `{{prompt}}` | Текст задачи для модели. |
| `role` | `[текст роли]` | Дополнительная инструкция по стилю ответа (необязательно). |
| `params` | JSON-объект | Дополнительные параметры конкретной модели (если поддерживаются). |
| `images` | `url1,url2` | Ссылки на входные изображения через запятую, без массива `[]`. |
| `video_url` | `https://...` | Ссылка на входное видео для video-сценариев (при необходимости). |
| `send_answer` | `true` | Отправлять ли результат в чат (`true` по умолчанию). |

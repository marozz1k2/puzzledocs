# kling_pro

Продвинутая видео-модель для детального контроля результата.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "kling_pro",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "kling_pro",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "business_operator": "{{BUSINESS_OPERATOR_USER_ID_TEXT}}",
  "business_connection": "{{BUSINESS_CONNECTION_ID}}",
  "images": [
    "https://example.com/reference.jpg"
  ],
  "params": {
    "duration": 5,
    "mode": "pro",
    "aspect_ratio": "16:9",
    "sound": true
  }
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовое видео."
}
```

## Параметры

- `prompt` (string, required) — описание видео.
- `bot` (string, required) — идентификатор модели (`kling_pro`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.duration` (number, optional) — длительность.
- `params.mode` (string, optional) — `std` или `pro` (нормализуется).
- `params.aspect_ratio` (string, optional) — соотношение сторон.
- `params.sound` (boolean, optional) — включение звука.
- `params.multi_shot` (boolean, optional) — доступно в multi-shot сценарии.
- `params.resolution` (string, optional) — если `1080p`, то `mode=pro`; если `720p`, то `mode=std`.

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

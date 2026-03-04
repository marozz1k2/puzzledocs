# yandex_speech_large

Качественный синтез речи для финального пользовательского аудио.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "yandex_speech_large",
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

- `prompt` / `text` (string, required) — текст для озвучивания.
- `bot` (string, required) — идентификатор модели (`yandex_speech_large`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция (нормализуется под профиль голоса).
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav` (`ogg_opus` и `opus` нормализуются в `ogg`).
- `lang` (string, optional) — язык (обычно `ru-RU`).
- `pitch` (number, optional) — высота голоса.

## Tracker payload

- Общие поля `payload` и актуальные алиасы (`model`, `prompt`, `params`, `images`, `video_url` и др.) описаны в [единой документации](../../TRACKER_PAYLOAD.md).
- Разрешённые `params`, дефолты и правила нормализации для этой модели смотрите в разделе с её ключом в [единой документации](../../TRACKER_PAYLOAD.md).

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

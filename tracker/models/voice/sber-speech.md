# sber_speech

Практичный голосовой движок для типовых озвучек.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "sber_speech",
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

- `prompt` / `text` (string, optional) — текст для озвучивания в TTS.
- `bot` (string, required) — идентификатор модели (`sber_speech`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `voice` (string, optional) — голос.
- `emotion` (string, optional) — стиль/эмоция.
- `speed` (number, optional) — скорость речи.
- `format` (string, optional) — `mp3`, `ogg`, `wav`.
- `lang` (string, optional) — язык.
- `pitch` (number, optional) — фиксируется в `0`.
- `stt_model` / `sttModel` (string, optional) — модель распознавания, по умолчанию `general`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.

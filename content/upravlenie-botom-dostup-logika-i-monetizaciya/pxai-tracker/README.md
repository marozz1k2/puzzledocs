# PxAI Tracker

PxAI Tracker позволяет вызывать модели из команд PuzzleBot через действие «Отправить запрос». В запросе всегда передаётся база `bot`, `token`, `user`, `model`; остальные параметры зависят от выбранной модели.

В каталоге PuzzleAI доступны модели для текста, изображений, видео, голоса и музыки. Стоимость обозначается как `💠25` и показывается рядом с моделью или операцией.

## Каталоги моделей

- [Текстовые модели](https://docs.pxsto.re/tracker/treker-zaprosy/text).
- [Фото-модели](https://docs.pxsto.re/tracker/treker-zaprosy/photo).
- [Видео-модели](https://docs.pxsto.re/tracker/treker-zaprosy/video).
- [Голосовые модели](https://docs.pxsto.re/tracker/treker-zaprosy/voice), включая [синтез речи](https://docs.pxsto.re/tracker/treker-zaprosy/voice/speech-catalog) и [распознавание речи](https://docs.pxsto.re/tracker/treker-zaprosy/voice/transcription-catalog).
- [Музыкальные модели](https://docs.pxsto.re/tracker/treker-zaprosy/music): Suno, Producer, QW Music и FlowMusic.

## Основной URL-адрес

`https://api.pxsto.re/main/puzzlebot-tracker`

## Минимальный пример

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя.
  "model": "gpt_5", // обязательно: ключ модели.
  "prompt": "{{prompt}}", // обычно обязательно: текст задачи.
  "send_answer": true // необязательно: отправить результат пользователю.
}
```


# producer

`producer` создаёт музыку и позволяет точечно заменить фрагмент, вокал или инструментал.

## Пример генерации

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя.
  "model": "producer", // обязательно: ключ Producer.
  "action": "generate", // обязательно: выбранная операция.
  "sound_prompt": "Энергичный синтвейв для ночной поездки", // описание звучания.
  "lyrics_text": "{{lyrics}}", // необязательно: свой текст песни.
  "instrumental": false, // необязательно: true для трека без вокала.
  "send_answer": true // необязательно: отправить результат в чат.
}
```

## Операции и стоимость

| Операция | `action` | Основные параметры | Стоимость |
| --- | --- | --- | ---: |
| Создать музыку | `generate` | `sound_prompt`, `lyrics_text` | 💠30 |
| Создать текст песни | `lyrics` | `prompt` | 💠5 |
| Продолжить трек | `extend` | `music_id`, `starts`, `sound_prompt` | 💠15 |
| Сделать кавер | `cover` | `music_id`, `sound_prompt`, `lyrics_text` | 💠15 |
| Создать вариацию | `variation` | `music_id` | 💠15 |
| Заменить фрагмент | `replace` | `music_id`, `starts`, `ends`, `sound_prompt` | 💠15 |
| Заменить вокал | `vocals_swap` | `music_id`, `sound_prompt`, `lyrics_text` | 💠15 |
| Заменить инструментал | `instrumentals_swap` | `music_id`, `sound_prompt` | 💠15 |
| Разделить дорожки | `stems` | `music_id` | 💠15 |
| Скачать аудио | `download` | `music_id`, `format` | 💠5 |
| Загрузить аудио | `upload` | `audio_url` | 💠5 |
| Создать видео | `generate_video` | `music_id`, `preset` | 💠15 |

## Основные параметры

| Ключ | Значение | Описание |
| --- | --- | --- |
| `model` | `producer` | Модель Producer. |
| `action` | значение из таблицы | Выбранная операция. |
| `sound_prompt` | текст | Описание звучания. |
| `lyrics_text` | текст | Текст песни. |
| `music_id` | ID трека | Исходный трек для обработки. |
| `starts` / `ends` | число в секундах | Границы фрагмента. |
| `format` | `mp3` или `wav` | Формат скачивания. |
| `preset` | `simple`, `modern` или `player` | Оформление видео. |

## Пример замены фрагмента

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно.
  "token": "[Ваш API-токен]", // обязательно.
  "user": "{{USER_ID_TEXT}}", // обязательно.
  "model": "producer", // обязательно.
  "action": "replace", // заменить часть трека.
  "music_id": "{{music_id}}", // ID исходного трека.
  "starts": 30, // начало замены в секундах.
  "ends": 45, // конец замены в секундах.
  "sound_prompt": "Мягкое фортепианное соло" // новое звучание фрагмента.
}
```

## Ответ

Готовый ответ содержит ссылку на аудио и ID результата. Если `send_answer=false`, он сохранится в `{{tracker_answer}}`.

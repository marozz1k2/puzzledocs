# OpenRouter speech

Динамический каталог OpenRouter-моделей для синтеза речи и голосовых сценариев через no-code API.

Список ниже актуален на 13.06.2026 и включает активные модели трекера. В поле `model` передаётся ключ из колонки `Ключ в трекере`.

## Как отправлять запрос

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`
- Формат тела: `application/json` или те же ключи в no-code параметрах.

Обязательная база для любого запроса: `bot`, `token`, `user`, `model`. Для OpenRouter-моделей поле `model` должно содержать точный ключ модели из таблицы ниже.

## Пример запроса с комментариями

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота в PuzzleBot.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота для доступа к трекеру.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии, к которой относится запрос.
  "model": "google_gemini_3_1_flash_tts_preview", // обязательно: точный ключ OpenRouter-модели из таблицы ниже.
  "prompt": "Озвучь этот текст спокойным голосом.", // обязательно для простого no-code сценария: текст задачи.
  "role": "[текст роли]", // необязательно: роль, стиль или ограничения для модели.
  "send_answer": true // необязательно: отправить результат пользователю; по умолчанию true.
}
```

## Параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота. В PuzzleBot обычно используется `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота для авторизации запроса. |
| `user` | string | Да | ID пользователя или сессии. В PuzzleBot обычно используется `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Точный ключ OpenRouter-модели из таблицы ниже. |
| `prompt` | string | Да | Текст задачи для простого no-code запроса. |
| `role` | string | Нет | Дополнительная инструкция для модели: роль, стиль ответа, ограничения. |
| `params.messages` | array | Нет | Расширенный формат сообщений OpenRouter chat-completions. Используйте только если нужно передать мультимодальный контент или историю вручную. |
| `params.max_tokens` | number | Нет | Ограничение длины ответа, если поддерживается выбранной моделью. |
| `params.voice` | string | Нет | Голос, если он поддерживается выбранной моделью. |
| `params.format` | string | Нет | Формат результата, если он поддерживается выбранной моделью. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Категории и списание

| Поле | Значение |
| --- | --- |
| Категория сегментации | `openrouter_speech_category` |
| Команда после успешного выполнения | Индивидуальная: `<model_key>_done`, например `google_gemini_3_1_flash_tts_preview_done`. |
| Количество активных моделей | 9 |

## Активные модели

| Ключ в трекере | Название | Ключ модели |
| --- | --- | --- |
| `canopylabs_orpheus_3b_0_1_ft` | Canopy Labs: Orpheus 3B | `canopylabs/orpheus-3b-0.1-ft` |
| `google_gemini_3_1_flash_tts_preview` | Google: Gemini 3.1 Flash TTS Preview | `google/gemini-3.1-flash-tts-preview` |
| `hexgrad_kokoro_82m` | hexgrad: Kokoro 82M | `hexgrad/kokoro-82m` |
| `microsoft_mai_voice_2` | Microsoft: MAI-Voice-2 | `microsoft/mai-voice-2` |
| `mistralai_voxtral_mini_tts_2603` | Mistral: Voxtral Mini TTS | `mistralai/voxtral-mini-tts-2603` |
| `sesame_csm_1b` | Sesame: CSM 1B | `sesame/csm-1b` |
| `x_ai_grok_voice_tts_1_0` | xAI: Grok Voice TTS 1.0 | `x-ai/grok-voice-tts-1.0` |
| `zyphra_zonos_v0_1_hybrid` | Zyphra: Zonos v0.1 Hybrid | `zyphra/zonos-v0.1-hybrid` |
| `zyphra_zonos_v0_1_transformer` | Zyphra: Zonos v0.1 Transformer | `zyphra/zonos-v0.1-transformer` |

## Ответ

```json
{
  "answer": "Ссылка на результат или текстовый ответ модели."
}
```

Если `send_answer = false`, результат не отправляется пользователю в чат, а сохраняется в переменную `{{tracker_answer}}`.

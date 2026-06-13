# OpenRouter transcription

Динамический каталог OpenRouter-моделей для расшифровки аудио и ASR-сценариев через no-code API.

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
  "model": "openai_whisper_large_v3", // обязательно: точный ключ OpenRouter-модели из таблицы ниже.
  "prompt": "Расшифруй голосовое сообщение и верни текст.", // обязательно для простого no-code сценария: текст задачи.
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
| `params.messages` | array | Нет | Расширенный формат сообщений OpenRouter chat-completions. Для аудио можно передать content item `input_audio`. |
| `params.max_tokens` | number | Нет | Ограничение длины ответа, если поддерживается выбранной моделью. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Категории и списание

| Поле | Значение |
| --- | --- |
| Категория сегментации | `openrouter_transcription_category` |
| Команда после успешного выполнения | Индивидуальная: `<model_key>_done`, например `openai_whisper_large_v3_done`. |
| Количество активных моделей | 10 |

## Активные модели

| Ключ в трекере | Название | Ключ модели |
| --- | --- | --- |
| `google_chirp_3` | Google: Chirp 3 | `google/chirp-3` |
| `microsoft_mai_transcribe_1_5` | Microsoft: MAI-Transcribe 1.5 | `microsoft/mai-transcribe-1.5` |
| `mistralai_voxtral_mini_transcribe` | Mistral: Voxtral Mini Transcribe | `mistralai/voxtral-mini-transcribe` |
| `nvidia_parakeet_tdt_0_6b_v3` | NVIDIA: Parakeet TDT 0.6B v3 | `nvidia/parakeet-tdt-0.6b-v3` |
| `openai_gpt_4o_mini_transcribe` | OpenAI: GPT-4o Mini Transcribe | `openai/gpt-4o-mini-transcribe` |
| `openai_gpt_4o_transcribe` | OpenAI: GPT-4o Transcribe | `openai/gpt-4o-transcribe` |
| `openai_whisper_1` | OpenAI: Whisper 1 | `openai/whisper-1` |
| `openai_whisper_large_v3` | OpenAI: Whisper Large V3 | `openai/whisper-large-v3` |
| `openai_whisper_large_v3_turbo` | OpenAI: Whisper Large V3 Turbo | `openai/whisper-large-v3-turbo` |
| `qwen_qwen3_asr_flash_2026_02_10` | Qwen: Qwen3 ASR Flash | `qwen/qwen3-asr-flash-2026-02-10` |

## Ответ

```json
{
  "answer": "Текстовая расшифровка аудио."
}
```

Если `send_answer = false`, результат не отправляется пользователю в чат, а сохраняется в переменную `{{tracker_answer}}`.

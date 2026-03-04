# Документация по tracker-параметрам для всех моделей

Этот документ — единая инструкция по полю `payload` (tracker) для всех поддерживаемых моделей в репозитории.

## 1) Общий формат входа tracker

Ожидается объект `payload` (или вложенный `payload.payload`) со следующими общими полями:

- `model` / `model_key` / `modelKey` — ключ модели.
- `prompt` / `text` / `query` / `data` — текст запроса.
- `params` — объект модельных параметров (основной способ передать специальные настройки модели).
- `images` / `image_urls` / `imageUrls` — входные изображения (массив URL или `file_id`).
- `video_url` / `videoUrl` / `video` / `video_file_id` / `videoFileId` / `file_id` / `fileId` — входное видео (для video-to-video режимов).
- `send_answer` — отправлять ответ в чат (`true` по умолчанию).
- `error_command` / `errorCommand` — команда для отправки ошибки.

Служебные поля для business-ответов:

- `business_operator` / `businessOperator` / `BUSINESS_OPERATOR_USER_ID_TEXT`
- `business_connection` / `businessConnection` / `BUSINESS_CONNECTION_ID`

---

## 2) Текстовые модели (GPT/Claude/Gemini/Grok и т.п.)

Для текстовых LLM используется стандартный `prompt` (или текст из команды). Спецпараметры передаются через общие настройки модели и не имеют отдельной строгой tracker-схемы в этом слое (кроме аудио/документов ниже).

Рекомендуемый минимальный payload:

```json
{
  "model": "gpt_5",
  "prompt": "Сформулируй план запуска проекта"
}
```

---

## 3) Голосовые модели (TTS/STT)

### 3.1 TTS (`yandex_speech`, `yandex_speech_large`, `sber_speech`, `sber_speech_large`)

Поддерживаемые tracker-поля:

- `prompt` (или `text`) — что озвучивать.
- `voice` — голос.
- `emotion` — стиль/эмоция (для Yandex нормализуется под профиль голоса).
- `speed` — скорость речи.
- `format` — выходной формат (`mp3`, `ogg`, `wav`; алиасы `ogg_opus`, `opus` → `ogg`).
- `lang` — язык (обычно `ru-RU`).
- `pitch` — высота голоса (используется в Yandex; для Sber принудительно `0`).

Пример:

```json
{
  "model": "yandex_speech",
  "prompt": "Добро пожаловать!",
  "voice": "alena",
  "emotion": "good",
  "speed": 1,
  "format": "mp3",
  "lang": "ru-RU",
  "pitch": 0
}
```

### 3.2 STT

- `stt_model` / `sttModel` — модель распознавания (`general` по умолчанию).

Пример:

```json
{
  "model": "sber_speech",
  "stt_model": "general"
}
```

---

## 4) Документы (business document)

Поля tracker:

- `document` — включение режима документа.
- `style` / `template` — шаблон (`classic`, `modern`, `custom`).
- `custom_template` / `customTemplate` — текст пользовательского шаблона.
- `custom_font` / `customFont` — шрифт.
- `format` — формат файла (`pdf` по умолчанию).

---

## 5) Unifically: изображение/видео модели

### 5.1 Общая схема

Для всех Unifically-моделей:

- `model` — ключ модели (например, `sora`, `kling`, `gpt_image`, `flux_2_pro` и т.д.).
- `prompt` — текст генерации.
- `params` — объект параметров конкретной модели.
- `images` — референсные изображения (кол-во ограничивается моделью).
- `video_url` — входное видео для video-to-video моделей Kling Omni.

Если параметр невалидный — он нормализуется или отбрасывается согласно правилам ниже.

### 5.2 Видео-модели и их params

#### `sora`

- Дефолты: `duration=10`.
- `aspect_ratio`: только `16:9` или `9:16`.
- Макс. изображений: `1`.

#### `sora_pro`

- Дефолты: `duration=25`.
- `aspect_ratio`: только `16:9` или `9:16`.
- Макс. изображений: `1`.

#### `grok_video`

- Дефолты: `duration=6`.
- Макс. изображений: `1`.

#### `veo_fast`, `veo`

- Дефолты: `resolution=1080p`.
- Макс. изображений: `2`.

#### `higgsfield_video`

- Дефолты: `duration=5`, `sound=false`.
- Макс. изображений: `2`.

#### `kling`, `kling_pro`

Разрешённые `params`:

- `duration`
- `mode` (`std`/`pro`, нормализуется)
- `aspect_ratio`
- `sound`
- `multi_shot` (только при включённом multi-shot сценарии)

Дополнительно:

- если передан `resolution=1080p`, принудительно `mode=pro`;
- если `resolution=720p`, принудительно `mode=std`.

#### `kling_2_5`

Разрешённые `params`:

- `duration`
- `mode`
- `enhance_prompt`

#### `kling_2_6`

Разрешённые `params`:

- `duration`
- `aspect_ratio`
- `negative_prompt`
- `enhance_prompt`
- `sound`

#### `kling_omni`

Разрешённые `params`:

- `duration`
- `mode`
- `aspect_ratio`
- `video_url`

#### `kling_3_omni`

- Если есть `video_url`: разрешены только `mode`, `video_url`.
- Если нет `video_url`: `duration`, `mode`, `aspect_ratio`, `sound`.

#### `kling_3_omni_edit`

Разрешённые `params`:

- `mode`
- `video_url`

#### `kling_2_6_motion_control`

Разрешённые `params`:

- `video_url`
- `resolution` (`720p`/`1080p`, всё остальное → `720p`)
- `scene_control` (boolean)
- `prompt`
- `character_orientation` (`video`/`image`, всё остальное → `video`)
- `background_source` (`input_video`/`input_image`)
- `seed` (целое число >= 0)

Логика:

- если `scene_control=true`, то:
  - `background_source` принудительно из допустимых,
  - поля `prompt`, `character_orientation`, `seed` удаляются;
- если `scene_control=false`, удаляется `background_source`.

### 5.3 Image-модели и их params

#### `gpt_image`

- Дефолты: `quality=high`, `aspect_ratio=auto`.
- `resolution` удаляется.
- `aspect_ratio` может быть взят из текста промпта (например, `--ar 16:9`).

#### `nano_banana`

- Дефолты: `resolution=2k`.
- `aspect_ratio` сохраняется только для валидных значений (`1:1`, `16:9`, `9:16`, `4:5`, `5:4`, `3:2`, `2:3`, `4:3`, `21:9` и т.п. из общего списка).
- Если `aspect_ratio=auto` или невалиден — удаляется.

#### `seedream` (и `seedance` в коде нормализации)

- Дефолты: `resolution=2k`, `aspect_ratio=1:1`.
- `seed`: только целое число >= 0, иначе удаляется.
- `aspect_ratio`: только один из `1:1`, `16:9`, `9:16`, `4:5`, `5:4`, `3:2`, `2:3`.
- `resolution`: только `2k` или `3k` (иначе `2k`).

#### `kling_image`

- Дефолты: `resolution=1k`, `aspect_ratio=auto`.
- `seed`: только целое число >= 0.
- `resolution`: только `1k` или `2k`.
- `aspect_ratio`:
  - для `kling-o1-image`: без `auto`, дефолт `16:9`;
  - для остальных: допускается `auto`, дефолт `auto`.

#### `flux_2_pro`, `flux_2_flex`, `flux_2_max`

- Дефолты: `resolution=2k`, `aspect_ratio=auto`.
- Дополнительно для `flux_2_pro` в `freeAiChat` принудительно `resolution=1k`.

#### `image_upscale`

- Требует хотя бы одно входное изображение.
- Дефолты:
  - `scale_factor=1x`
  - `upscale_preset=standard`
  - `denoise=0.2`
  - `sharpen=0.3`
- `scale_factor`: `1x`, `2x`, `4x`, `8x`.
- `upscale_preset`: `standard`, `high-fidelity`, `text-refine`, `art-cg`, `low-res`.
- `denoise`, `sharpen`: число в диапазоне `[0..1]`.
- `seed`: целое число >= 0.
- `face_enhancement` (объект):
  - `enabled` (boolean)
  - `creativity` `[0..1]` (дефолт `0.3`)
  - `strength` `[0..1]` (дефолт `0.8`)

#### `higgsfield_photo`

- Дефолт: `resolution=2k`.

---

## 6) Базовые рекомендации для документации по моделям

Для каждой новой модели в документации фиксируйте:

1. Ключ модели (`model`).
2. Тип (`text`, `tts`, `stt`, `image`, `video`, `upscale`).
3. Обязательные поля tracker.
4. Разрешённые `params`.
5. Дефолты `params`.
6. Правила нормализации (допустимые значения, что удаляется).
7. Ограничения по входам (`maxImages`, нужен ли `video_url`, нужен ли input image).
8. Пример минимального payload.

Это позволит синхронно поддерживать инструкции и фактическую логику workflow.

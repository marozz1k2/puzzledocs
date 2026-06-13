# Текстовые модели

Текстовые модели для генерации, редактирования, анализа текста, кода, reasoning-задач и ответов через OpenRouter text.

Эта статья покрывает модели с одинаковой схемой запроса: обычные текстовые модели и OpenRouter text. Для сценариев с другими параметрами используйте отдельные статьи: [vision](vision.md) для запросов по изображениям и [Создание документов](document-creation.md) для режима `document=true`.

## Как отправлять запрос

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`
- Формат тела: `application/json` или те же ключи в no-code параметрах.

Обязательная база для любого запроса: `bot`, `token`, `user`, `model`. Поле `model` должно содержать точный ключ модели из таблиц ниже.

## Пример запроса с комментариями

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота в PuzzleBot.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота для доступа к трекеру.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "gpt_5", // обязательно: ключ модели из таблицы ниже.
  "prompt": "{{prompt}}", // обязательно: текст задачи для модели.
  "role": "[текст роли]", // необязательно: роль, стиль или ограничения для модели.
  "send_answer": true // необязательно: отправить результат пользователю; по умолчанию true.
}
```

Для OpenRouter text используйте такой же запрос, но передавайте в `model` ключ OpenRouter-модели из таблицы, например `openai_gpt_5_4_pro`.

## Параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота. В PuzzleBot обычно используется `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота для авторизации запроса. |
| `user` | string | Да | ID пользователя или сессии. В PuzzleBot обычно используется `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Точный ключ модели из таблиц ниже. |
| `prompt` | string | Да | Текст задачи. Алиасы поддерживаются для совместимости: `text`, `query`, `data`. Для новых запросов используйте `prompt`. |
| `role` | string | Нет | Дополнительная инструкция для модели: роль, стиль ответа, ограничения. |
| `params` | object | Нет | Вложенные настройки конкретной модели. Для `web_search` можно передать `params.search_scope`. |
| `params.messages` | array | Нет | Расширенный формат сообщений OpenRouter chat-completions. Используйте только если нужно передать мультимодальный контент или историю вручную. |
| `params.max_tokens` | number | Нет | Ограничение длины ответа, если поддерживается выбранной моделью. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Категории и списание

| Поле | Значение |
| --- | --- |
| Категория сегментации обычных текстовых моделей | Индивидуальная категория модели, например `gpt_5_category`. |
| Команда после успешного выполнения обычных текстовых моделей | Индивидуальная команда модели, например `gpt_5_done`. |
| Категория сегментации OpenRouter text | `openrouter_text_category` |
| Команда после успешного выполнения OpenRouter text | Индивидуальная: `<model_key>_done`, например `openai_gpt_5_4_pro_done`. |
| Количество активных OpenRouter text моделей | 326 |

## Основные текстовые модели

| Ключ модели | Название | Команда после успешного выполнения |
| --- | --- | --- |
| `gpt_free` | ChatGPT free / GPT-5 Nano | `gpt_done` |
| `gpt_5` | GPT 5 | `gpt_5_done` |
| `gpt_5_mini` | GPT 5 mini | `gpt_5_mini_done` |
| `gpt_4_1` | GPT 4.1 | `gpt_4_1_done` |
| `gpt_4_mini` | GPT 4 mini | `gpt_4_mini_done` |
| `gemini_3_pro` | Gemini 3 Pro | `gemini_3_pro_done` |
| `gemini_3_flash` | Gemini 3 Flash | `gemini_3_flash_done` |
| `gemini_2_5_pro` | Gemini 2.5 Pro | `gemini_2_5_pro_done` |
| `gemini_2_5_flash` | Gemini 2.5 Flash | `gemini_2_5_flash_done` |
| `claude_4_5_haiku` | Claude 4.5 Haiku | `claude_4_5_haiku_done` |
| `claude_3_5_haiku` | Claude 3.5 Haiku | `claude_3_5_haiku_done` |
| `grok_4` | Grok 4 | `grok_4_done` |
| `deepseek` | DeepSeek | `deepseek_done` |
| `web_search` | Web-search | `web_search_done` |

## OpenRouter text

Список ниже актуален на 13.06.2026 и включает активные модели трекера. В поле `model` передаётся ключ из колонки `Ключ в трекере`.

| Ключ в трекере | Название | Ключ модели |
| --- | --- | --- |
| `ai21_jamba_large_1_7` | AI21: Jamba Large 1.7 | `ai21/jamba-large-1.7` |
| `aion_labs_aion_1_0` | AionLabs: Aion-1.0 | `aion-labs/aion-1.0` |
| `aion_labs_aion_1_0_mini` | AionLabs: Aion-1.0-Mini | `aion-labs/aion-1.0-mini` |
| `aion_labs_aion_2_0` | AionLabs: Aion-2.0 | `aion-labs/aion-2.0` |
| `aion_labs_aion_rp_llama_3_1_8b` | AionLabs: Aion-RP 1.0 (8B) | `aion-labs/aion-rp-llama-3.1-8b` |
| `allenai_olmo_3_32b_think` | AllenAI: Olmo 3 32B Think | `allenai/olmo-3-32b-think` |
| `amazon_nova_2_lite_v1` | Amazon: Nova 2 Lite | `amazon/nova-2-lite-v1` |
| `amazon_nova_lite_v1` | Amazon: Nova Lite 1.0 | `amazon/nova-lite-v1` |
| `amazon_nova_micro_v1` | Amazon: Nova Micro 1.0 | `amazon/nova-micro-v1` |
| `amazon_nova_premier_v1` | Amazon: Nova Premier 1.0 | `amazon/nova-premier-v1` |
| `amazon_nova_pro_v1` | Amazon: Nova Pro 1.0 | `amazon/nova-pro-v1` |
| `anthropic_claude_3_5_haiku` | Anthropic: Claude 3.5 Haiku | `anthropic/claude-3.5-haiku` |
| `anthropic_claude_3_haiku` | Anthropic: Claude 3 Haiku | `anthropic/claude-3-haiku` |
| `anthropic_claude_fable_5` | Anthropic: Claude Fable 5 | `anthropic/claude-fable-5` |
| `latest_anthropic_claude_fable_latest` | Anthropic: Claude Fable Latest | `~anthropic/claude-fable-latest` |
| `anthropic_claude_haiku_4_5` | Anthropic: Claude Haiku 4.5 | `anthropic/claude-haiku-4.5` |
| `latest_anthropic_claude_haiku_latest` | Anthropic Claude Haiku Latest | `~anthropic/claude-haiku-latest` |
| `anthropic_claude_opus_4` | Anthropic: Claude Opus 4 | `anthropic/claude-opus-4` |
| `anthropic_claude_opus_4_1` | Anthropic: Claude Opus 4.1 | `anthropic/claude-opus-4.1` |
| `anthropic_claude_opus_4_5` | Anthropic: Claude Opus 4.5 | `anthropic/claude-opus-4.5` |
| `anthropic_claude_opus_4_6` | Anthropic: Claude Opus 4.6 | `anthropic/claude-opus-4.6` |
| `anthropic_claude_opus_4_6_fast` | Anthropic: Claude Opus 4.6 (Fast) | `anthropic/claude-opus-4.6-fast` |
| `anthropic_claude_opus_4_7` | Anthropic: Claude Opus 4.7 | `anthropic/claude-opus-4.7` |
| `anthropic_claude_opus_4_7_fast` | Anthropic: Claude Opus 4.7 (Fast) | `anthropic/claude-opus-4.7-fast` |
| `anthropic_claude_opus_4_8` | Anthropic: Claude Opus 4.8 | `anthropic/claude-opus-4.8` |
| `anthropic_claude_opus_4_8_fast` | Anthropic: Claude Opus 4.8 (Fast) | `anthropic/claude-opus-4.8-fast` |
| `latest_anthropic_claude_opus_latest` | Anthropic: Claude Opus Latest | `~anthropic/claude-opus-latest` |
| `anthropic_claude_sonnet_4` | Anthropic: Claude Sonnet 4 | `anthropic/claude-sonnet-4` |
| `anthropic_claude_sonnet_4_5` | Anthropic: Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` |
| `anthropic_claude_sonnet_4_6` | Anthropic: Claude Sonnet 4.6 | `anthropic/claude-sonnet-4.6` |
| `latest_anthropic_claude_sonnet_latest` | Anthropic Claude Sonnet Latest | `~anthropic/claude-sonnet-latest` |
| `arcee_ai_coder_large` | Arcee AI: Coder Large | `arcee-ai/coder-large` |
| `arcee_ai_trinity_large_thinking` | Arcee AI: Trinity Large Thinking | `arcee-ai/trinity-large-thinking` |
| `arcee_ai_trinity_mini` | Arcee AI: Trinity Mini | `arcee-ai/trinity-mini` |
| `arcee_ai_virtuoso_large` | Arcee AI: Virtuoso Large | `arcee-ai/virtuoso-large` |
| `baidu_ernie_4_5_vl_424b_a47b` | Baidu: ERNIE 4.5 VL 424B A47B | `baidu/ernie-4.5-vl-424b-a47b` |
| `openrouter_bodybuilder` | Body Builder (beta) | `openrouter/bodybuilder` |
| `bytedance_seed_seed_1_6` | ByteDance Seed: Seed 1.6 | `bytedance-seed/seed-1.6` |
| `bytedance_seed_seed_1_6_flash` | ByteDance Seed: Seed 1.6 Flash | `bytedance-seed/seed-1.6-flash` |
| `bytedance_seed_seed_2_0_lite` | ByteDance Seed: Seed-2.0-Lite | `bytedance-seed/seed-2.0-lite` |
| `bytedance_seed_seed_2_0_mini` | ByteDance Seed: Seed-2.0-Mini | `bytedance-seed/seed-2.0-mini` |
| `bytedance_ui_tars_1_5_7b` | ByteDance: UI-TARS 7B | `bytedance/ui-tars-1.5-7b` |
| `cohere_command_a` | Cohere: Command A | `cohere/command-a` |
| `cohere_command_r_08_2024` | Cohere: Command R (08-2024) | `cohere/command-r-08-2024` |
| `cohere_command_r_plus_08_2024` | Cohere: Command R+ (08-2024) | `cohere/command-r-plus-08-2024` |
| `cohere_command_r7b_12_2024` | Cohere: Command R7B (12-2024) | `cohere/command-r7b-12-2024` |
| `deepcogito_cogito_v2_1_671b` | Deep Cogito: Cogito v2.1 671B | `deepcogito/cogito-v2.1-671b` |
| `deepseek_deepseek_chat` | DeepSeek: DeepSeek V3 | `deepseek/deepseek-chat` |
| `deepseek_deepseek_chat_v3_0324` | DeepSeek: DeepSeek V3 0324 | `deepseek/deepseek-chat-v3-0324` |
| `deepseek_deepseek_chat_v3_1` | DeepSeek: DeepSeek V3.1 | `deepseek/deepseek-chat-v3.1` |
| `deepseek_deepseek_v3_1_terminus` | DeepSeek: DeepSeek V3.1 Terminus | `deepseek/deepseek-v3.1-terminus` |
| `deepseek_deepseek_v3_2` | DeepSeek: DeepSeek V3.2 | `deepseek/deepseek-v3.2` |
| `deepseek_deepseek_v3_2_exp` | DeepSeek: DeepSeek V3.2 Exp | `deepseek/deepseek-v3.2-exp` |
| `deepseek_deepseek_v4_flash` | DeepSeek: DeepSeek V4 Flash | `deepseek/deepseek-v4-flash` |
| `deepseek_deepseek_v4_pro` | DeepSeek: DeepSeek V4 Pro | `deepseek/deepseek-v4-pro` |
| `deepseek_deepseek_r1` | DeepSeek: R1 | `deepseek/deepseek-r1` |
| `deepseek_deepseek_r1_0528` | DeepSeek: R1 0528 | `deepseek/deepseek-r1-0528` |
| `deepseek_deepseek_r1_distill_llama_70b` | DeepSeek: R1 Distill Llama 70B | `deepseek/deepseek-r1-distill-llama-70b` |
| `deepseek_deepseek_r1_distill_qwen_32b` | DeepSeek: R1 Distill Qwen 32B | `deepseek/deepseek-r1-distill-qwen-32b` |
| `essentialai_rnj_1_instruct` | EssentialAI: Rnj 1 Instruct | `essentialai/rnj-1-instruct` |
| `openrouter_free` | Free Models Router | `openrouter/free` |
| `google_gemini_2_5_flash` | Google: Gemini 2.5 Flash | `google/gemini-2.5-flash` |
| `google_gemini_2_5_flash_lite` | Google: Gemini 2.5 Flash Lite | `google/gemini-2.5-flash-lite` |
| `google_gemini_2_5_flash_lite_preview_09_2025` | Google: Gemini 2.5 Flash Lite Preview 09-2025 | `google/gemini-2.5-flash-lite-preview-09-2025` |
| `google_gemini_2_5_pro` | Google: Gemini 2.5 Pro | `google/gemini-2.5-pro` |
| `google_gemini_2_5_pro_preview_05_06` | Google: Gemini 2.5 Pro Preview 05-06 | `google/gemini-2.5-pro-preview-05-06` |
| `google_gemini_2_5_pro_preview` | Google: Gemini 2.5 Pro Preview 06-05 | `google/gemini-2.5-pro-preview` |
| `google_gemini_3_1_flash_lite` | Google: Gemini 3.1 Flash Lite | `google/gemini-3.1-flash-lite` |
| `google_gemini_3_1_flash_lite_preview` | Google: Gemini 3.1 Flash Lite Preview | `google/gemini-3.1-flash-lite-preview` |
| `google_gemini_3_1_pro_preview` | Google: Gemini 3.1 Pro Preview | `google/gemini-3.1-pro-preview` |
| `google_gemini_3_1_pro_preview_customtools` | Google: Gemini 3.1 Pro Preview Custom Tools | `google/gemini-3.1-pro-preview-customtools` |
| `google_gemini_3_5_flash` | Google: Gemini 3.5 Flash | `google/gemini-3.5-flash` |
| `google_gemini_3_flash_preview` | Google: Gemini 3 Flash Preview | `google/gemini-3-flash-preview` |
| `latest_google_gemini_flash_latest` | Google Gemini Flash Latest | `~google/gemini-flash-latest` |
| `latest_google_gemini_pro_latest` | Google Gemini Pro Latest | `~google/gemini-pro-latest` |
| `google_gemma_2_27b_it` | Google: Gemma 2 27B | `google/gemma-2-27b-it` |
| `google_gemma_3_12b_it` | Google: Gemma 3 12B | `google/gemma-3-12b-it` |
| `google_gemma_3_27b_it` | Google: Gemma 3 27B | `google/gemma-3-27b-it` |
| `google_gemma_3_4b_it` | Google: Gemma 3 4B | `google/gemma-3-4b-it` |
| `google_gemma_3n_e4b_it` | Google: Gemma 3n 4B | `google/gemma-3n-e4b-it` |
| `google_gemma_4_26b_a4b_it` | Google: Gemma 4 26B A4B | `google/gemma-4-26b-a4b-it` |
| `google_gemma_4_26b_a4b_it_free` | Google: Gemma 4 26B A4B  (free) | `google/gemma-4-26b-a4b-it:free` |
| `google_gemma_4_31b_it` | Google: Gemma 4 31B | `google/gemma-4-31b-it` |
| `google_gemma_4_31b_it_free` | Google: Gemma 4 31B (free) | `google/gemma-4-31b-it:free` |
| `ibm_granite_granite_4_0_h_micro` | IBM: Granite 4.0 Micro | `ibm-granite/granite-4.0-h-micro` |
| `ibm_granite_granite_4_1_8b` | IBM: Granite 4.1 8B | `ibm-granite/granite-4.1-8b` |
| `inception_mercury_2` | Inception: Mercury 2 | `inception/mercury-2` |
| `inclusionai_ling_2_6_1t` | inclusionAI: Ling-2.6-1T | `inclusionai/ling-2.6-1t` |
| `inclusionai_ling_2_6_flash` | inclusionAI: Ling-2.6-flash | `inclusionai/ling-2.6-flash` |
| `inclusionai_ring_2_6_1t` | inclusionAI: Ring-2.6-1T | `inclusionai/ring-2.6-1t` |
| `inflection_inflection_3_pi` | Inflection: Inflection 3 Pi | `inflection/inflection-3-pi` |
| `inflection_inflection_3_productivity` | Inflection: Inflection 3 Productivity | `inflection/inflection-3-productivity` |
| `kwaipilot_kat_coder_pro_v2` | Kwaipilot: KAT-Coder-Pro V2 | `kwaipilot/kat-coder-pro-v2` |
| `liquid_lfm_2_24b_a2b` | LiquidAI: LFM2-24B-A2B | `liquid/lfm-2-24b-a2b` |
| `liquid_lfm_2_5_1_2b_instruct_free` | LiquidAI: LFM2.5-1.2B-Instruct (free) | `liquid/lfm-2.5-1.2b-instruct:free` |
| `liquid_lfm_2_5_1_2b_thinking_free` | LiquidAI: LFM2.5-1.2B-Thinking (free) | `liquid/lfm-2.5-1.2b-thinking:free` |
| `meta_llama_llama_guard_3_8b` | Llama Guard 3 8B | `meta-llama/llama-guard-3-8b` |
| `anthracite_org_magnum_v4_72b` | Magnum v4 72B | `anthracite-org/magnum-v4-72b` |
| `mancer_weaver` | Mancer: Weaver (alpha) | `mancer/weaver` |
| `meta_llama_llama_3_1_70b_instruct` | Meta: Llama 3.1 70B Instruct | `meta-llama/llama-3.1-70b-instruct` |
| `meta_llama_llama_3_1_8b_instruct` | Meta: Llama 3.1 8B Instruct | `meta-llama/llama-3.1-8b-instruct` |
| `meta_llama_llama_3_2_11b_vision_instruct` | Meta: Llama 3.2 11B Vision Instruct | `meta-llama/llama-3.2-11b-vision-instruct` |
| `meta_llama_llama_3_2_1b_instruct` | Meta: Llama 3.2 1B Instruct | `meta-llama/llama-3.2-1b-instruct` |
| `meta_llama_llama_3_2_3b_instruct` | Meta: Llama 3.2 3B Instruct | `meta-llama/llama-3.2-3b-instruct` |
| `meta_llama_llama_3_2_3b_instruct_free` | Meta: Llama 3.2 3B Instruct (free) | `meta-llama/llama-3.2-3b-instruct:free` |
| `meta_llama_llama_3_3_70b_instruct` | Meta: Llama 3.3 70B Instruct | `meta-llama/llama-3.3-70b-instruct` |
| `meta_llama_llama_3_3_70b_instruct_free` | Meta: Llama 3.3 70B Instruct (free) | `meta-llama/llama-3.3-70b-instruct:free` |
| `meta_llama_llama_3_70b_instruct` | Meta: Llama 3 70B Instruct | `meta-llama/llama-3-70b-instruct` |
| `meta_llama_llama_3_8b_instruct` | Meta: Llama 3 8B Instruct | `meta-llama/llama-3-8b-instruct` |
| `meta_llama_llama_4_maverick` | Meta: Llama 4 Maverick | `meta-llama/llama-4-maverick` |
| `meta_llama_llama_4_scout` | Meta: Llama 4 Scout | `meta-llama/llama-4-scout` |
| `meta_llama_llama_guard_4_12b` | Meta: Llama Guard 4 12B | `meta-llama/llama-guard-4-12b` |
| `microsoft_phi_4` | Microsoft: Phi 4 | `microsoft/phi-4` |
| `microsoft_phi_4_mini_instruct` | Microsoft: Phi 4 Mini Instruct | `microsoft/phi-4-mini-instruct` |
| `minimax_minimax_01` | MiniMax: MiniMax-01 | `minimax/minimax-01` |
| `minimax_minimax_m1` | MiniMax: MiniMax M1 | `minimax/minimax-m1` |
| `minimax_minimax_m2` | MiniMax: MiniMax M2 | `minimax/minimax-m2` |
| `minimax_minimax_m2_1` | MiniMax: MiniMax M2.1 | `minimax/minimax-m2.1` |
| `minimax_minimax_m2_5` | MiniMax: MiniMax M2.5 | `minimax/minimax-m2.5` |
| `minimax_minimax_m2_7` | MiniMax: MiniMax M2.7 | `minimax/minimax-m2.7` |
| `minimax_minimax_m2_her` | MiniMax: MiniMax M2-her | `minimax/minimax-m2-her` |
| `minimax_minimax_m3` | MiniMax: MiniMax M3 | `minimax/minimax-m3` |
| `mistralai_codestral_2508` | Mistral: Codestral 2508 | `mistralai/codestral-2508` |
| `mistralai_devstral_2512` | Mistral: Devstral 2 2512 | `mistralai/devstral-2512` |
| `mistralai_mistral_large` | Mistral Large | `mistralai/mistral-large` |
| `mistralai_mistral_large_2407` | Mistral Large 2407 | `mistralai/mistral-large-2407` |
| `mistralai_ministral_14b_2512` | Mistral: Ministral 3 14B 2512 | `mistralai/ministral-14b-2512` |
| `mistralai_ministral_3b_2512` | Mistral: Ministral 3 3B 2512 | `mistralai/ministral-3b-2512` |
| `mistralai_ministral_8b_2512` | Mistral: Ministral 3 8B 2512 | `mistralai/ministral-8b-2512` |
| `mistralai_mistral_large_2512` | Mistral: Mistral Large 3 2512 | `mistralai/mistral-large-2512` |
| `mistralai_mistral_medium_3` | Mistral: Mistral Medium 3 | `mistralai/mistral-medium-3` |
| `mistralai_mistral_medium_3_1` | Mistral: Mistral Medium 3.1 | `mistralai/mistral-medium-3.1` |
| `mistralai_mistral_medium_3_5` | Mistral: Mistral Medium 3.5 | `mistralai/mistral-medium-3-5` |
| `mistralai_mistral_nemo` | Mistral: Mistral Nemo | `mistralai/mistral-nemo` |
| `mistralai_mistral_small_24b_instruct_2501` | Mistral: Mistral Small 3 | `mistralai/mistral-small-24b-instruct-2501` |
| `mistralai_mistral_small_3_1_24b_instruct` | Mistral: Mistral Small 3.1 24B | `mistralai/mistral-small-3.1-24b-instruct` |
| `mistralai_mistral_small_3_2_24b_instruct` | Mistral: Mistral Small 3.2 24B | `mistralai/mistral-small-3.2-24b-instruct` |
| `mistralai_mistral_small_2603` | Mistral: Mistral Small 4 | `mistralai/mistral-small-2603` |
| `mistralai_mixtral_8x22b_instruct` | Mistral: Mixtral 8x22B Instruct | `mistralai/mixtral-8x22b-instruct` |
| `mistralai_mistral_saba` | Mistral: Saba | `mistralai/mistral-saba` |
| `mistralai_voxtral_small_24b_2507` | Mistral: Voxtral Small 24B 2507 | `mistralai/voxtral-small-24b-2507` |
| `moonshotai_kimi_k2` | MoonshotAI: Kimi K2 0711 | `moonshotai/kimi-k2` |
| `moonshotai_kimi_k2_0905` | MoonshotAI: Kimi K2 0905 | `moonshotai/kimi-k2-0905` |
| `moonshotai_kimi_k2_5` | MoonshotAI: Kimi K2.5 | `moonshotai/kimi-k2.5` |
| `moonshotai_kimi_k2_6` | MoonshotAI: Kimi K2.6 | `moonshotai/kimi-k2.6` |
| `moonshotai_kimi_k2_thinking` | MoonshotAI: Kimi K2 Thinking | `moonshotai/kimi-k2-thinking` |
| `latest_moonshotai_kimi_latest` | MoonshotAI Kimi Latest | `~moonshotai/kimi-latest` |
| `morph_morph_v3_fast` | Morph: Morph V3 Fast | `morph/morph-v3-fast` |
| `morph_morph_v3_large` | Morph: Morph V3 Large | `morph/morph-v3-large` |
| `gryphe_mythomax_l2_13b` | MythoMax 13B | `gryphe/mythomax-l2-13b` |
| `nex_agi_nex_n2_pro_free` | Nex AGI: Nex-N2-Pro (free) | `nex-agi/nex-n2-pro:free` |
| `nousresearch_hermes_3_llama_3_1_405b` | Nous: Hermes 3 405B Instruct | `nousresearch/hermes-3-llama-3.1-405b` |
| `nousresearch_hermes_3_llama_3_1_405b_free` | Nous: Hermes 3 405B Instruct (free) | `nousresearch/hermes-3-llama-3.1-405b:free` |
| `nousresearch_hermes_3_llama_3_1_70b` | Nous: Hermes 3 70B Instruct | `nousresearch/hermes-3-llama-3.1-70b` |
| `nousresearch_hermes_4_405b` | Nous: Hermes 4 405B | `nousresearch/hermes-4-405b` |
| `nousresearch_hermes_4_70b` | Nous: Hermes 4 70B | `nousresearch/hermes-4-70b` |
| `nvidia_llama_3_3_nemotron_super_49b_v1_5` | NVIDIA: Llama 3.3 Nemotron Super 49B V1.5 | `nvidia/llama-3.3-nemotron-super-49b-v1.5` |
| `nvidia_nemotron_3_5_content_safety_free` | NVIDIA: Nemotron 3.5 Content Safety (free) | `nvidia/nemotron-3.5-content-safety:free` |
| `nvidia_nemotron_3_nano_30b_a3b` | NVIDIA: Nemotron 3 Nano 30B A3B | `nvidia/nemotron-3-nano-30b-a3b` |
| `nvidia_nemotron_3_nano_30b_a3b_free` | NVIDIA: Nemotron 3 Nano 30B A3B (free) | `nvidia/nemotron-3-nano-30b-a3b:free` |
| `nvidia_nemotron_3_nano_omni_30b_a3b_reasoning_free` | NVIDIA: Nemotron 3 Nano Omni (free) | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` |
| `nvidia_nemotron_3_super_120b_a12b` | NVIDIA: Nemotron 3 Super | `nvidia/nemotron-3-super-120b-a12b` |
| `nvidia_nemotron_3_super_120b_a12b_free` | NVIDIA: Nemotron 3 Super (free) | `nvidia/nemotron-3-super-120b-a12b:free` |
| `nvidia_nemotron_3_ultra_550b_a55b` | NVIDIA: Nemotron 3 Ultra | `nvidia/nemotron-3-ultra-550b-a55b` |
| `nvidia_nemotron_3_ultra_550b_a55b_free` | NVIDIA: Nemotron 3 Ultra (free) | `nvidia/nemotron-3-ultra-550b-a55b:free` |
| `nvidia_nemotron_nano_12b_v2_vl_free` | NVIDIA: Nemotron Nano 12B 2 VL (free) | `nvidia/nemotron-nano-12b-v2-vl:free` |
| `nvidia_nemotron_nano_9b_v2_free` | NVIDIA: Nemotron Nano 9B V2 (free) | `nvidia/nemotron-nano-9b-v2:free` |
| `openai_gpt_3_5_turbo` | OpenAI: GPT-3.5 Turbo | `openai/gpt-3.5-turbo` |
| `openai_gpt_3_5_turbo_16k` | OpenAI: GPT-3.5 Turbo 16k | `openai/gpt-3.5-turbo-16k` |
| `openai_gpt_3_5_turbo_instruct` | OpenAI: GPT-3.5 Turbo Instruct | `openai/gpt-3.5-turbo-instruct` |
| `openai_gpt_3_5_turbo_0613` | OpenAI: GPT-3.5 Turbo (older v0613) | `openai/gpt-3.5-turbo-0613` |
| `openai_gpt_4` | OpenAI: GPT-4 | `openai/gpt-4` |
| `openai_gpt_4_1` | OpenAI: GPT-4.1 | `openai/gpt-4.1` |
| `openai_gpt_4_1_mini` | OpenAI: GPT-4.1 Mini | `openai/gpt-4.1-mini` |
| `openai_gpt_4_1_nano` | OpenAI: GPT-4.1 Nano | `openai/gpt-4.1-nano` |
| `openai_gpt_4o` | OpenAI: GPT-4o | `openai/gpt-4o` |
| `openai_gpt_4o_2024_05_13` | OpenAI: GPT-4o (2024-05-13) | `openai/gpt-4o-2024-05-13` |
| `openai_gpt_4o_2024_08_06` | OpenAI: GPT-4o (2024-08-06) | `openai/gpt-4o-2024-08-06` |
| `openai_gpt_4o_2024_11_20` | OpenAI: GPT-4o (2024-11-20) | `openai/gpt-4o-2024-11-20` |
| `openai_gpt_4o_mini` | OpenAI: GPT-4o-mini | `openai/gpt-4o-mini` |
| `openai_gpt_4o_mini_2024_07_18` | OpenAI: GPT-4o-mini (2024-07-18) | `openai/gpt-4o-mini-2024-07-18` |
| `openai_gpt_4o_mini_search_preview` | OpenAI: GPT-4o-mini Search Preview | `openai/gpt-4o-mini-search-preview` |
| `openai_gpt_4o_search_preview` | OpenAI: GPT-4o Search Preview | `openai/gpt-4o-search-preview` |
| `openai_gpt_4_turbo` | OpenAI: GPT-4 Turbo | `openai/gpt-4-turbo` |
| `openai_gpt_4_turbo_preview` | OpenAI: GPT-4 Turbo Preview | `openai/gpt-4-turbo-preview` |
| `openai_gpt_5` | OpenAI: GPT-5 | `openai/gpt-5` |
| `openai_gpt_5_1` | OpenAI: GPT-5.1 | `openai/gpt-5.1` |
| `openai_gpt_5_1_chat` | OpenAI: GPT-5.1 Chat | `openai/gpt-5.1-chat` |
| `openai_gpt_5_1_codex` | OpenAI: GPT-5.1-Codex | `openai/gpt-5.1-codex` |
| `openai_gpt_5_1_codex_max` | OpenAI: GPT-5.1-Codex-Max | `openai/gpt-5.1-codex-max` |
| `openai_gpt_5_1_codex_mini` | OpenAI: GPT-5.1-Codex-Mini | `openai/gpt-5.1-codex-mini` |
| `openai_gpt_5_2` | OpenAI: GPT-5.2 | `openai/gpt-5.2` |
| `openai_gpt_5_2_chat` | OpenAI: GPT-5.2 Chat | `openai/gpt-5.2-chat` |
| `openai_gpt_5_2_codex` | OpenAI: GPT-5.2-Codex | `openai/gpt-5.2-codex` |
| `openai_gpt_5_2_pro` | OpenAI: GPT-5.2 Pro | `openai/gpt-5.2-pro` |
| `openai_gpt_5_3_chat` | OpenAI: GPT-5.3 Chat | `openai/gpt-5.3-chat` |
| `openai_gpt_5_3_codex` | OpenAI: GPT-5.3-Codex | `openai/gpt-5.3-codex` |
| `openai_gpt_5_4` | OpenAI: GPT-5.4 | `openai/gpt-5.4` |
| `openai_gpt_5_4_mini` | OpenAI: GPT-5.4 Mini | `openai/gpt-5.4-mini` |
| `openai_gpt_5_4_nano` | OpenAI: GPT-5.4 Nano | `openai/gpt-5.4-nano` |
| `openai_gpt_5_4_pro` | OpenAI: GPT-5.4 Pro | `openai/gpt-5.4-pro` |
| `openai_gpt_5_5` | OpenAI: GPT-5.5 | `openai/gpt-5.5` |
| `openai_gpt_5_5_pro` | OpenAI: GPT-5.5 Pro | `openai/gpt-5.5-pro` |
| `openai_gpt_5_chat` | OpenAI: GPT-5 Chat | `openai/gpt-5-chat` |
| `openai_gpt_5_codex` | OpenAI: GPT-5 Codex | `openai/gpt-5-codex` |
| `openai_gpt_5_mini` | OpenAI: GPT-5 Mini | `openai/gpt-5-mini` |
| `openai_gpt_5_nano` | OpenAI: GPT-5 Nano | `openai/gpt-5-nano` |
| `openai_gpt_5_pro` | OpenAI: GPT-5 Pro | `openai/gpt-5-pro` |
| `openai_gpt_chat_latest` | OpenAI: GPT Chat Latest | `openai/gpt-chat-latest` |
| `latest_openai_gpt_latest` | OpenAI GPT Latest | `~openai/gpt-latest` |
| `latest_openai_gpt_mini_latest` | OpenAI GPT Mini Latest | `~openai/gpt-mini-latest` |
| `openai_gpt_oss_120b` | OpenAI: gpt-oss-120b | `openai/gpt-oss-120b` |
| `openai_gpt_oss_120b_free` | OpenAI: gpt-oss-120b (free) | `openai/gpt-oss-120b:free` |
| `openai_gpt_oss_20b` | OpenAI: gpt-oss-20b | `openai/gpt-oss-20b` |
| `openai_gpt_oss_20b_free` | OpenAI: gpt-oss-20b (free) | `openai/gpt-oss-20b:free` |
| `openai_gpt_oss_safeguard_20b` | OpenAI: gpt-oss-safeguard-20b | `openai/gpt-oss-safeguard-20b` |
| `openai_o1` | OpenAI: o1 | `openai/o1` |
| `openai_o1_pro` | OpenAI: o1-pro | `openai/o1-pro` |
| `openai_o3` | OpenAI: o3 | `openai/o3` |
| `openai_o3_deep_research` | OpenAI: o3 Deep Research | `openai/o3-deep-research` |
| `openai_o3_mini` | OpenAI: o3 Mini | `openai/o3-mini` |
| `openai_o3_mini_high` | OpenAI: o3 Mini High | `openai/o3-mini-high` |
| `openai_o3_pro` | OpenAI: o3 Pro | `openai/o3-pro` |
| `openai_o4_mini` | OpenAI: o4 Mini | `openai/o4-mini` |
| `openai_o4_mini_deep_research` | OpenAI: o4 Mini Deep Research | `openai/o4-mini-deep-research` |
| `openai_o4_mini_high` | OpenAI: o4 Mini High | `openai/o4-mini-high` |
| `openrouter_fusion` | OpenRouter: Fusion | `openrouter/fusion` |
| `openrouter_owl_alpha` | Owl Alpha | `openrouter/owl-alpha` |
| `openrouter_pareto_code` | Pareto Code Router | `openrouter/pareto-code` |
| `perceptron_perceptron_mk1` | Perceptron: Perceptron Mk1 | `perceptron/perceptron-mk1` |
| `perplexity_sonar` | Perplexity: Sonar | `perplexity/sonar` |
| `perplexity_sonar_deep_research` | Perplexity: Sonar Deep Research | `perplexity/sonar-deep-research` |
| `perplexity_sonar_pro` | Perplexity: Sonar Pro | `perplexity/sonar-pro` |
| `perplexity_sonar_pro_search` | Perplexity: Sonar Pro Search | `perplexity/sonar-pro-search` |
| `perplexity_sonar_reasoning_pro` | Perplexity: Sonar Reasoning Pro | `perplexity/sonar-reasoning-pro` |
| `poolside_laguna_m_1_free` | Poolside: Laguna M.1 (free) | `poolside/laguna-m.1:free` |
| `poolside_laguna_xs_2_free` | Poolside: Laguna XS.2 (free) | `poolside/laguna-xs.2:free` |
| `prime_intellect_intellect_3` | Prime Intellect: INTELLECT-3 | `prime-intellect/intellect-3` |
| `qwen_qwen_2_5_72b_instruct` | Qwen2.5 72B Instruct | `qwen/qwen-2.5-72b-instruct` |
| `qwen_qwen_2_5_coder_32b_instruct` | Qwen2.5 Coder 32B Instruct | `qwen/qwen-2.5-coder-32b-instruct` |
| `qwen_qwen_2_5_7b_instruct` | Qwen: Qwen2.5 7B Instruct | `qwen/qwen-2.5-7b-instruct` |
| `qwen_qwen2_5_vl_72b_instruct` | Qwen: Qwen2.5 VL 72B Instruct | `qwen/qwen2.5-vl-72b-instruct` |
| `qwen_qwen3_14b` | Qwen: Qwen3 14B | `qwen/qwen3-14b` |
| `qwen_qwen3_235b_a22b` | Qwen: Qwen3 235B A22B | `qwen/qwen3-235b-a22b` |
| `qwen_qwen3_235b_a22b_2507` | Qwen: Qwen3 235B A22B Instruct 2507 | `qwen/qwen3-235b-a22b-2507` |
| `qwen_qwen3_235b_a22b_thinking_2507` | Qwen: Qwen3 235B A22B Thinking 2507 | `qwen/qwen3-235b-a22b-thinking-2507` |
| `qwen_qwen3_30b_a3b` | Qwen: Qwen3 30B A3B | `qwen/qwen3-30b-a3b` |
| `qwen_qwen3_30b_a3b_instruct_2507` | Qwen: Qwen3 30B A3B Instruct 2507 | `qwen/qwen3-30b-a3b-instruct-2507` |
| `qwen_qwen3_30b_a3b_thinking_2507` | Qwen: Qwen3 30B A3B Thinking 2507 | `qwen/qwen3-30b-a3b-thinking-2507` |
| `qwen_qwen3_32b` | Qwen: Qwen3 32B | `qwen/qwen3-32b` |
| `qwen_qwen3_5_122b_a10b` | Qwen: Qwen3.5-122B-A10B | `qwen/qwen3.5-122b-a10b` |
| `qwen_qwen3_5_27b` | Qwen: Qwen3.5-27B | `qwen/qwen3.5-27b` |
| `qwen_qwen3_5_35b_a3b` | Qwen: Qwen3.5-35B-A3B | `qwen/qwen3.5-35b-a3b` |
| `qwen_qwen3_5_397b_a17b` | Qwen: Qwen3.5 397B A17B | `qwen/qwen3.5-397b-a17b` |
| `qwen_qwen3_5_9b` | Qwen: Qwen3.5-9B | `qwen/qwen3.5-9b` |
| `qwen_qwen3_5_flash_02_23` | Qwen: Qwen3.5-Flash | `qwen/qwen3.5-flash-02-23` |
| `qwen_qwen3_5_plus_02_15` | Qwen: Qwen3.5 Plus 2026-02-15 | `qwen/qwen3.5-plus-02-15` |
| `qwen_qwen3_5_plus_20260420` | Qwen: Qwen3.5 Plus 2026-04-20 | `qwen/qwen3.5-plus-20260420` |
| `qwen_qwen3_6_27b` | Qwen: Qwen3.6 27B | `qwen/qwen3.6-27b` |
| `qwen_qwen3_6_35b_a3b` | Qwen: Qwen3.6 35B A3B | `qwen/qwen3.6-35b-a3b` |
| `qwen_qwen3_6_flash` | Qwen: Qwen3.6 Flash | `qwen/qwen3.6-flash` |
| `qwen_qwen3_6_max_preview` | Qwen: Qwen3.6 Max Preview | `qwen/qwen3.6-max-preview` |
| `qwen_qwen3_6_plus` | Qwen: Qwen3.6 Plus | `qwen/qwen3.6-plus` |
| `qwen_qwen3_7_max` | Qwen: Qwen3.7 Max | `qwen/qwen3.7-max` |
| `qwen_qwen3_7_plus` | Qwen: Qwen3.7 Plus | `qwen/qwen3.7-plus` |
| `qwen_qwen3_8b` | Qwen: Qwen3 8B | `qwen/qwen3-8b` |
| `qwen_qwen3_coder_30b_a3b_instruct` | Qwen: Qwen3 Coder 30B A3B Instruct | `qwen/qwen3-coder-30b-a3b-instruct` |
| `qwen_qwen3_coder` | Qwen: Qwen3 Coder 480B A35B | `qwen/qwen3-coder` |
| `qwen_qwen3_coder_free` | Qwen: Qwen3 Coder 480B A35B (free) | `qwen/qwen3-coder:free` |
| `qwen_qwen3_coder_flash` | Qwen: Qwen3 Coder Flash | `qwen/qwen3-coder-flash` |
| `qwen_qwen3_coder_next` | Qwen: Qwen3 Coder Next | `qwen/qwen3-coder-next` |
| `qwen_qwen3_coder_plus` | Qwen: Qwen3 Coder Plus | `qwen/qwen3-coder-plus` |
| `qwen_qwen3_max` | Qwen: Qwen3 Max | `qwen/qwen3-max` |
| `qwen_qwen3_max_thinking` | Qwen: Qwen3 Max Thinking | `qwen/qwen3-max-thinking` |
| `qwen_qwen3_next_80b_a3b_instruct` | Qwen: Qwen3 Next 80B A3B Instruct | `qwen/qwen3-next-80b-a3b-instruct` |
| `qwen_qwen3_next_80b_a3b_instruct_free` | Qwen: Qwen3 Next 80B A3B Instruct (free) | `qwen/qwen3-next-80b-a3b-instruct:free` |
| `qwen_qwen3_next_80b_a3b_thinking` | Qwen: Qwen3 Next 80B A3B Thinking | `qwen/qwen3-next-80b-a3b-thinking` |
| `qwen_qwen3_vl_235b_a22b_instruct` | Qwen: Qwen3 VL 235B A22B Instruct | `qwen/qwen3-vl-235b-a22b-instruct` |
| `qwen_qwen3_vl_235b_a22b_thinking` | Qwen: Qwen3 VL 235B A22B Thinking | `qwen/qwen3-vl-235b-a22b-thinking` |
| `qwen_qwen3_vl_30b_a3b_instruct` | Qwen: Qwen3 VL 30B A3B Instruct | `qwen/qwen3-vl-30b-a3b-instruct` |
| `qwen_qwen3_vl_30b_a3b_thinking` | Qwen: Qwen3 VL 30B A3B Thinking | `qwen/qwen3-vl-30b-a3b-thinking` |
| `qwen_qwen3_vl_32b_instruct` | Qwen: Qwen3 VL 32B Instruct | `qwen/qwen3-vl-32b-instruct` |
| `qwen_qwen3_vl_8b_instruct` | Qwen: Qwen3 VL 8B Instruct | `qwen/qwen3-vl-8b-instruct` |
| `qwen_qwen3_vl_8b_thinking` | Qwen: Qwen3 VL 8B Thinking | `qwen/qwen3-vl-8b-thinking` |
| `qwen_qwen_plus` | Qwen: Qwen-Plus | `qwen/qwen-plus` |
| `qwen_qwen_plus_2025_07_28` | Qwen: Qwen Plus 0728 | `qwen/qwen-plus-2025-07-28` |
| `qwen_qwen_plus_2025_07_28_thinking` | Qwen: Qwen Plus 0728 (thinking) | `qwen/qwen-plus-2025-07-28:thinking` |
| `rekaai_reka_edge` | Reka Edge | `rekaai/reka-edge` |
| `rekaai_reka_flash_3` | Reka Flash 3 | `rekaai/reka-flash-3` |
| `relace_relace_apply_3` | Relace: Relace Apply 3 | `relace/relace-apply-3` |
| `relace_relace_search` | Relace: Relace Search | `relace/relace-search` |
| `undi95_remm_slerp_l2_13b` | ReMM SLERP 13B | `undi95/remm-slerp-l2-13b` |
| `sao10k_l3_1_70b_hanami_x1` | Sao10K: Llama 3.1 70B Hanami x1 | `sao10k/l3.1-70b-hanami-x1` |
| `sao10k_l3_1_euryale_70b` | Sao10K: Llama 3.1 Euryale 70B v2.2 | `sao10k/l3.1-euryale-70b` |
| `sao10k_l3_3_euryale_70b` | Sao10K: Llama 3.3 Euryale 70B | `sao10k/l3.3-euryale-70b` |
| `sao10k_l3_lunaris_8b` | Sao10K: Llama 3 8B Lunaris | `sao10k/l3-lunaris-8b` |
| `stepfun_step_3_5_flash` | StepFun: Step 3.5 Flash | `stepfun/step-3.5-flash` |
| `stepfun_step_3_7_flash` | StepFun: Step 3.7 Flash | `stepfun/step-3.7-flash` |
| `switchpoint_router` | Switchpoint Router | `switchpoint/router` |
| `tencent_hunyuan_a13b_instruct` | Tencent: Hunyuan A13B Instruct | `tencent/hunyuan-a13b-instruct` |
| `tencent_hy3_preview` | Tencent: Hy3 preview | `tencent/hy3-preview` |
| `thedrummer_cydonia_24b_v4_1` | TheDrummer: Cydonia 24B V4.1 | `thedrummer/cydonia-24b-v4.1` |
| `thedrummer_rocinante_12b` | TheDrummer: Rocinante 12B | `thedrummer/rocinante-12b` |
| `thedrummer_skyfall_36b_v2` | TheDrummer: Skyfall 36B V2 | `thedrummer/skyfall-36b-v2` |
| `thedrummer_unslopnemo_12b` | TheDrummer: UnslopNemo 12B | `thedrummer/unslopnemo-12b` |
| `upstage_solar_pro_3` | Upstage: Solar Pro 3 | `upstage/solar-pro-3` |
| `cognitivecomputations_dolphin_mistral_24b_venice_db66220940` | Venice: Uncensored (free) | `cognitivecomputations/dolphin-mistral-24b-venice-edition:free` |
| `microsoft_wizardlm_2_8x22b` | WizardLM-2 8x22B | `microsoft/wizardlm-2-8x22b` |
| `writer_palmyra_x5` | Writer: Palmyra X5 | `writer/palmyra-x5` |
| `x_ai_grok_4_20` | xAI: Grok 4.20 | `x-ai/grok-4.20` |
| `x_ai_grok_4_20_multi_agent` | xAI: Grok 4.20 Multi-Agent | `x-ai/grok-4.20-multi-agent` |
| `x_ai_grok_4_3` | xAI: Grok 4.3 | `x-ai/grok-4.3` |
| `x_ai_grok_build_0_1` | xAI: Grok Build 0.1 | `x-ai/grok-build-0.1` |
| `xiaomi_mimo_v2_5` | Xiaomi: MiMo-V2.5 | `xiaomi/mimo-v2.5` |
| `xiaomi_mimo_v2_5_pro` | Xiaomi: MiMo-V2.5-Pro | `xiaomi/mimo-v2.5-pro` |
| `xiaomi_mimo_v2_flash` | Xiaomi: MiMo-V2-Flash | `xiaomi/mimo-v2-flash` |
| `z_ai_glm_4_5` | Z.ai: GLM 4.5 | `z-ai/glm-4.5` |
| `z_ai_glm_4_5_air` | Z.ai: GLM 4.5 Air | `z-ai/glm-4.5-air` |
| `z_ai_glm_4_5v` | Z.ai: GLM 4.5V | `z-ai/glm-4.5v` |
| `z_ai_glm_4_6` | Z.ai: GLM 4.6 | `z-ai/glm-4.6` |
| `z_ai_glm_4_6v` | Z.ai: GLM 4.6V | `z-ai/glm-4.6v` |
| `z_ai_glm_4_7` | Z.ai: GLM 4.7 | `z-ai/glm-4.7` |
| `z_ai_glm_4_7_flash` | Z.ai: GLM 4.7 Flash | `z-ai/glm-4.7-flash` |
| `z_ai_glm_5` | Z.ai: GLM 5 | `z-ai/glm-5` |
| `z_ai_glm_5_1` | Z.ai: GLM 5.1 | `z-ai/glm-5.1` |
| `z_ai_glm_5_turbo` | Z.ai: GLM 5 Turbo | `z-ai/glm-5-turbo` |

## Ответ

```json
{
  "answer": "Текстовый ответ с выполненной задачей."
}
```

Если `send_answer = false`, результат не отправляется пользователю в чат, а сохраняется в переменную `{{tracker_answer}}`.

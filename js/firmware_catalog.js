// Firmware catalogue for UndeXProject/RNode_Firmware_CE nightly builds.
// Release archive names can differ from the file names stored inside them.
(function () {
    const ESP32 = ROM.PLATFORM_ESP32;
    const NRF52 = ROM.PLATFORM_NRF52;
    const RELEASE_BASE = "https://github.com/UndeXProject/RNode_Firmware_CE/releases/download/nightly/";

    function espFlash(prefix, flashSize = "4MB", bootloaderAddress = "0x1000") {
        return {
            flash_size: flashSize,
            flash_files: {
                "0xe000": `${prefix}.boot_app0`,
                [bootloaderAddress]: `${prefix}.bootloader`,
                "0x10000": `${prefix}.bin`,
                "0x210000": "console_image.bin",
                "0x8000": `${prefix}.partitions`,
            },
        };
    }

    function model(id, name, options = {}) {
        return { id, name, ...options };
    }

    function espProduct(name, id, releaseFilename, prefix, models, options = {}) {
        return {
            name,
            id,
            platform: ESP32,
            models,
            firmware_filename: releaseFilename,
            flash_config: espFlash(prefix, options.flashSize, options.bootloaderAddress),
        };
    }

    window.CE_FIRMWARE_RELEASE_BASE = RELEASE_BASE;
    window.CE_PRODUCTS = [
        espProduct("Heltec LoRa32 v2", ROM.PRODUCT_H32_V2, "release-heltec32_v2.zip", "rnode_firmware_heltec32v2", [
            model(ROM.MODEL_C4, "433 MHz"),
            model(ROM.MODEL_C9, "868 / 915 / 923 MHz"),
        ], { flashSize: "8MB" }),
        espProduct("Heltec LoRa32 v2 (external LED)", ROM.PRODUCT_H32_V2, "release-heltec32_v2_extled.zip", "rnode_firmware_heltec32v2", [
            model(ROM.MODEL_C4, "433 MHz"),
            model(ROM.MODEL_C9, "868 / 915 / 923 MHz"),
        ], { flashSize: "8MB" }),
        espProduct("Heltec LoRa32 v3", ROM.PRODUCT_H32_V3, "release-heltec32_v3.zip", "rnode_firmware_heltec32v3", [
            model(ROM.MODEL_C5, "433 MHz"),
            model(ROM.MODEL_CA, "868 / 915 / 923 MHz"),
        ], { flashSize: "8MB", bootloaderAddress: "0x0" }),
        espProduct("Heltec Wireless Paper", ROM.PRODUCT_H_W_PAPER, "release-heltec_w_paper.zip", "rnode_firmware_heltecwpaper", [
            model(ROM.MODEL_C8, "863–928 MHz (SX1262)"),
        ], { flashSize: "8MB", bootloaderAddress: "0x0" }),
        {
            name: "Heltec Mesh Node T114",
            id: ROM.PRODUCT_HELTEC_T114,
            platform: NRF52,
            models: [
                model(ROM.MODEL_C6, "470–510 MHz (HT-n5262-LF)"),
                model(ROM.MODEL_C7, "863–928 MHz (HT-n5262-HF)"),
                model(ROM.MODEL_CB, "863–928 MHz + GPS"),
            ],
            firmware_filename: "release-heltec_t114.zip",
        },
        espProduct("LilyGO LoRa32 v1.0", ROM.PRODUCT_T32_10, "release-lora32_v10.zip", "rnode_firmware_lora32v10", [
            model(ROM.MODEL_BA, "433 MHz"),
            model(ROM.MODEL_BB, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v1.0 (external LED)", ROM.PRODUCT_T32_10, "release-lora32_v10_extled.zip", "rnode_firmware_lora32v10", [
            model(ROM.MODEL_BA, "433 MHz"),
            model(ROM.MODEL_BB, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v2.0", ROM.PRODUCT_T32_20, "release-lora32_v20.zip", "rnode_firmware_lora32v20", [
            model(ROM.MODEL_B3, "433 MHz"),
            model(ROM.MODEL_B8, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v2.0 (external LED)", ROM.PRODUCT_T32_20, "release-lora32_v20_extled.zip", "rnode_firmware_lora32v20", [
            model(ROM.MODEL_B3, "433 MHz"),
            model(ROM.MODEL_B8, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v2.1", ROM.PRODUCT_T32_21, "release-lora32_v21.zip", "rnode_firmware_lora32v21", [
            model(ROM.MODEL_B4, "433 MHz"),
            model(ROM.MODEL_B9, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v2.1 (external LED)", ROM.PRODUCT_T32_21, "release-lora32_v21_extled.zip", "rnode_firmware_lora32v21", [
            model(ROM.MODEL_B4, "433 MHz"),
            model(ROM.MODEL_B9, "868 / 915 / 923 MHz"),
        ]),
        espProduct("LilyGO LoRa32 v2.1 (TCXO)", ROM.PRODUCT_T32_21, "release-lora32_v21_tcxo.zip", "rnode_firmware_lora32v21_tcxo", [
            model(ROM.MODEL_B4, "433 MHz"),
            model(ROM.MODEL_B9, "868 / 915 / 923 MHz"),
        ]),
        {
            name: "LilyGO LoRa T3S3",
            id: ROM.PRODUCT_RNODE,
            platform: ESP32,
            models: [
                model(ROM.MODEL_A5, "433 MHz (SX1278)", {
                    firmware_filename: "release-t3s3_sx127x.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_sx127x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_AA, "868 / 915 / 923 MHz (SX1276)", {
                    firmware_filename: "release-t3s3_sx127x.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_sx127x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_A1, "433 MHz (SX1268)", {
                    firmware_filename: "release-t3s3.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_sx126x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_A6, "868 / 915 / 923 MHz (SX1262)", {
                    firmware_filename: "release-t3s3.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_sx126x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_AC, "2.4 GHz (SX1280 + PA)", {
                    firmware_filename: "release-t3s3_sx1280_pa.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_sx1280_pa", "4MB", "0x0"),
                }),
            ],
        },
        {
            name: "LilyGO T3S3 E-Paper",
            id: ROM.PRODUCT_RNODE,
            platform: ESP32,
            models: [
                model(ROM.MODEL_A5, "433 MHz (SX1278)", {
                    firmware_filename: "release-t3s3_epaper_sx127x.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_epaper_sx127x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_AA, "868 / 915 / 923 MHz (SX1276)", {
                    firmware_filename: "release-t3s3_epaper_sx127x.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_epaper_sx127x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_A1, "433 MHz (SX1268)", {
                    firmware_filename: "release-t3s3_epaper.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_epaper_sx126x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_A6, "868 / 915 / 923 MHz (SX1262)", {
                    firmware_filename: "release-t3s3_epaper.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_epaper_sx126x", "4MB", "0x0"),
                }),
                model(ROM.MODEL_AC, "2.4 GHz (SX1280 + PA)", {
                    firmware_filename: "release-t3s3_epaper_sx1280_pa.zip",
                    flash_config: espFlash("rnode_firmware_t3s3_epaper_sx1280_pa", "4MB", "0x0"),
                }),
            ],
        },
        {
            name: "LilyGO T-Beam",
            id: ROM.PRODUCT_TBEAM,
            platform: ESP32,
            models: [
                model(ROM.MODEL_E4, "433 MHz (SX1278)", {
                    firmware_filename: "release-tbeam.zip",
                    flash_config: espFlash("rnode_firmware_tbeam"),
                }),
                model(ROM.MODEL_E9, "868 / 915 / 923 MHz (SX1276)", {
                    firmware_filename: "release-tbeam.zip",
                    flash_config: espFlash("rnode_firmware_tbeam"),
                }),
                model(ROM.MODEL_E3, "433 MHz (SX1268)", {
                    firmware_filename: "release-tbeam_sx1262.zip",
                    flash_config: espFlash("rnode_firmware_tbeam_sx1262"),
                }),
                model(ROM.MODEL_E8, "868 / 915 / 923 MHz (SX1262)", {
                    firmware_filename: "release-tbeam_sx1262.zip",
                    flash_config: espFlash("rnode_firmware_tbeam_sx1262"),
                }),
            ],
        },
        espProduct("LilyGO T-Beam Supreme", ROM.PRODUCT_TBEAM_S_V1, "release-tbeam_supreme.zip", "rnode_firmware_tbeam_supreme", [
            model(ROM.MODEL_DB, "433 MHz (SX1268)"),
            model(ROM.MODEL_DC, "868 / 915 / 923 MHz (SX1262)"),
        ], { bootloaderAddress: "0x0" }),
        espProduct("LilyGO T-Deck / T-Deck Plus", ROM.PRODUCT_TDECK, "release-tdeck.zip", "rnode_firmware_tdeck", [
            model(ROM.MODEL_D4, "433 MHz (SX1268)"),
            model(ROM.MODEL_D9, "868 / 915 / 923 MHz (SX1262)"),
        ], { bootloaderAddress: "0x0" }),
        {
            name: "LilyGO T-Echo",
            id: ROM.PRODUCT_TECHO,
            platform: NRF52,
            models: [
                model(ROM.MODEL_16, "433 MHz"),
                model(ROM.MODEL_17, "868 / 915 / 923 MHz"),
            ],
            firmware_filename: "release-techo.zip",
        },
        {
            name: "RAK4631",
            id: ROM.PRODUCT_RAK4631,
            platform: NRF52,
            models: [
                model(ROM.MODEL_11, "433 MHz (SX126x)", { firmware_filename: "release-rak4631.zip" }),
                model(ROM.MODEL_12, "868 / 915 / 923 MHz (SX1262)", { firmware_filename: "release-rak4631.zip" }),
                model(ROM.MODEL_13, "433 MHz (WisBlock SX1280)", { firmware_filename: "release-rak4631_sx1280.zip" }),
                model(ROM.MODEL_14, "868 / 915 MHz (WisBlock SX1280)", { firmware_filename: "release-rak4631_sx1280.zip" }),
            ],
        },
        {
            name: "OpenCom XL",
            id: ROM.PRODUCT_OPENCOM_XL,
            platform: NRF52,
            models: [model(ROM.MODEL_21, "868 / 915 MHz")],
            firmware_filename: "release-opencom-xl.zip",
        },
        espProduct("Seeed Studio XIAO ESP32-S3 + Wio-SX1262", ROM.PRODUCT_XIAO_S3, "release-xiao_s3.zip", "rnode_firmware_xiao_esp32s3", [
            model(ROM.MODEL_DE, "433 MHz"),
            model(ROM.MODEL_DD, "868 / 915 / 923 MHz"),
        ], { flashSize: "8MB", bootloaderAddress: "0x0" }),
        espProduct("RNode NG 2.0", ROM.PRODUCT_RNODE, "release-rnode_ng_20.zip", "rnode_firmware_ng20", [
            model(ROM.MODEL_A3, "410–525 MHz"),
            model(ROM.MODEL_A8, "820–1020 MHz"),
        ]),
        espProduct("RNode NG 2.1", ROM.PRODUCT_RNODE, "release-rnode_ng_21.zip", "rnode_firmware_ng21", [
            model(ROM.MODEL_A2, "410–525 MHz"),
            model(ROM.MODEL_A7, "820–1020 MHz"),
        ]),
        espProduct("EBYTE E22 ESP32", ROM.PRODUCT_HMBRW, "release-e22_esp32.zip", "rnode_firmware_esp32_e22", [
            model(ROM.MODEL_FE, "Homebrew, up to 17 dBm"),
            model(ROM.MODEL_FF, "Homebrew, up to 14 dBm"),
        ]),
        espProduct("Adafruit Feather ESP32", ROM.PRODUCT_HMBRW, "release-featheresp32.zip", "rnode_firmware_featheresp32", [
            model(ROM.MODEL_FE, "Homebrew, up to 17 dBm"),
            model(ROM.MODEL_FF, "Homebrew, up to 14 dBm"),
        ]),
        espProduct("Generic ESP32", ROM.PRODUCT_HMBRW, "release-genericesp32.zip", "rnode_firmware_esp32_generic", [
            model(ROM.MODEL_FE, "Homebrew, up to 17 dBm"),
            model(ROM.MODEL_FF, "Homebrew, up to 14 dBm"),
        ]),
    ];
})();

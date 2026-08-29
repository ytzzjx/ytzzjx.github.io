#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""生成社交分享用的 OG 封面图（1200x630）。

平时不需要运行；只有站点数量、标题或配色变化时才重新执行：
    python scripts/build_og_image.py

依赖 Pillow 和系统中文字体（Windows 下用微软雅黑）。
"""
import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "og-cover.png"

WIDTH, HEIGHT = 1200, 630
PAGE = "#f4f6f5"
SURFACE = "#ffffff"
INK = "#15191b"
MUTED = "#697176"
LINE = "#d8dddd"
CYAN = "#008e9a"

BOLD = "C:/Windows/Fonts/msyhbd.ttc"
REGULAR = "C:/Windows/Fonts/msyh.ttc"


def count_entries() -> int:
    """从 app.js 里数出当前收录的站点数，避免封面和页面对不上。

    归档条目（archivedEntries）和在线条目字段缩进相同，所以用 archivedAt 把它们减掉。
    """
    source = (ROOT / "app.js").read_text(encoding="utf-8")
    total = len(re.findall(r"^      name: ", source, flags=re.MULTILINE))
    archived = len(re.findall(r"^      archivedAt: ", source, flags=re.MULTILINE))
    return total - archived


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def main() -> None:
    total = count_entries()
    image = Image.new("RGB", (WIDTH, HEIGHT), PAGE)
    draw = ImageDraw.Draw(image)

    # 主卡片，留出页面同款的细边框。
    draw.rectangle([56, 56, WIDTH - 56, HEIGHT - 56], fill=SURFACE, outline=LINE, width=2)
    # 左侧强调条，呼应站内 cyan 主色。
    draw.rectangle([56, 56, 66, HEIGHT - 56], fill=CYAN)

    draw.text((116, 132), "PUBLIC BENEFIT DIRECTORY", font=font(BOLD, 26), fill=CYAN)
    draw.text((116, 196), "公益中转分享", font=font(BOLD, 92), fill=INK)
    draw.text(
        (116, 330),
        "好用的站点、注册方式和最新福利",
        font=font(REGULAR, 40),
        fill=INK,
    )
    draw.text((116, 392), "一页看完，点击直达。", font=font(REGULAR, 40), fill=MUTED)

    # 底部信息条：收录数量 + 域名。
    draw.line([116, 476, WIDTH - 116, 476], fill=LINE, width=2)
    draw.text((116, 508), f"当前收录 {total} 个站点", font=font(BOLD, 34), fill=INK)
    domain_font = font(REGULAR, 30)
    domain = "ytzzjx.github.io"
    domain_width = draw.textlength(domain, font=domain_font)
    draw.text((WIDTH - 116 - domain_width, 512), domain, font=domain_font, fill=MUTED)

    image.save(OUTPUT, "PNG", optimize=True)
    print(json.dumps({"file": OUTPUT.name, "entries": total, "bytes": OUTPUT.stat().st_size}, ensure_ascii=False))


if __name__ == "__main__":
    main()

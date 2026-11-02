"""Print-poster brand cards for Сораши Пати. Exact Cyrillic, no generative glyphs."""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT = "/workspace/.grok/brand/Unbounded-vf.ttf"
INK = (16, 12, 24, 255)
LIME = (210, 255, 74, 255)
CORAL = (255, 90, 54, 255)
CREAM = (246, 241, 231, 255)


def font(size, wght=900):
    f = ImageFont.truetype(FONT, size)
    f.set_variation_by_axes([wght])
    return f


def text_width(text, f, tracking):
    return sum(f.getlength(ch) + tracking for ch in text) - tracking


def text_height(text, f):
    b = f.getbbox(text)
    return b[3] - b[1]


def draw_tracked(draw, text, x, y, f, fill, tracking):
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += f.getlength(ch) + tracking


def lockup(base, lines, cx, top):
    """lines: dicts text, size, wght, tracking, fill, shadow, gap_after.
    Shadow is (dx, dy, color) or None. Centered on cx. Returns bottom y.
    """
    y = top
    for line in lines:
        f = font(line["size"], line.get("wght", 900))
        w = text_width(line["text"], f, line["tracking"])
        x = cx - w / 2
        shadow = line.get("shadow")
        if shadow:
            dx, dy, col = shadow
            draw_tracked(base, line["text"], x + dx, y + dy, f, col, line["tracking"])
        # lime misregister peeking out from the top-left of the cream face
        ghost = line.get("ghost")
        if ghost:
            dx, dy, col = ghost
            draw_tracked(base, line["text"], x + dx, y + dy, f, col, line["tracking"])
        draw_tracked(base, line["text"], x, y, f, line["fill"], line["tracking"])
        y += text_height(line["text"], f) + line.get("gap_after", 0)
    return y


def halftone(base, cx, cy, r, color, step, dot):
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    r2 = r * r
    x0 = max(0, int(cx - r))
    x1 = min(base.size[0], int(cx + r))
    y0 = max(0, int(cy - r))
    y1 = min(base.size[1], int(cy + r))
    # snap grid so dots don't crawl when the circle moves
    sx = x0 - (x0 % step)
    sy = y0 - (y0 % step)
    for yy in range(sy, y1, step):
        for xx in range(sx, x1, step):
            if (xx - cx) ** 2 + (yy - cy) ** 2 <= r2:
                d.ellipse((xx - dot, yy - dot, xx + dot, yy + dot), fill=color)
    base.alpha_composite(overlay)


def rotated_paste(base, img, cx, cy, angle):
    rot = img.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
    base.alpha_composite(rot, (int(cx - rot.width / 2), int(cy - rot.height / 2)))


def punch_card():
    w, h = 176, 246
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, h - 1), radius=4, fill=CREAM)
    d.rectangle((0, 0, 14, h), fill=LIME)
    d.rectangle((28, 28, w - 22, 40), fill=INK)
    d.rectangle((28, 64, w - 46, 76), fill=CORAL)
    d.rectangle((28, 100, w - 28, 112), fill=INK)
    d.rectangle((28, 136, w - 64, 148), fill=INK)
    # empty stamp — a vote, not a letter
    d.ellipse((w - 68, h - 74, w - 26, h - 32), outline=CORAL, width=5)
    d.ellipse((w - 56, h - 62, w - 38, h - 44), fill=LIME)
    return im


def solid_card(w, h, color, radius=4):
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=color)
    return im


def versus_card(w=168, h=236):
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    split = int(h * 0.46)
    gap = max(8, int(h * 0.05))
    d.rectangle((0, 0, w, split), fill=LIME)
    d.rectangle((0, split + gap, w, h), fill=CORAL)
    d.rectangle((0, split, w, split + gap), fill=CREAM)
    # head-to-head pips, geometry only
    d.rectangle((16, int(h * 0.12), 40, int(h * 0.24)), fill=INK)
    d.rectangle((16, int(h * 0.66), 40, int(h * 0.78)), fill=INK)
    d.rectangle((52, int(h * 0.17), w - 18, int(h * 0.22)), fill=INK)
    d.rectangle((52, int(h * 0.71), w - 32, int(h * 0.76)), fill=CREAM)
    return im


def crop_marks(d, w, h, inset=28, arm=22, color=CREAM):
    pairs = [
        (inset, inset, 1, 1),
        (w - inset, inset, -1, 1),
        (inset, h - inset, 1, -1),
        (w - inset, h - inset, -1, -1),
    ]
    for x, y, sx, sy in pairs:
        d.line((x, y, x + arm * sx, y), fill=color, width=2)
        d.line((x, y, x, y + arm * sy), fill=color, width=2)


def grain(base, amount=18):
    noise = Image.effect_noise(base.size, amount).convert("L")
    # punch the midtones down so the grain is a veil, not a fog
    noise = noise.point(lambda p: 128 + (p - 128) * 0.35)
    veil = Image.merge("RGBA", (noise, noise, noise, Image.new("L", base.size, 28)))
    base.alpha_composite(veil)


def render_og():
    W, H = 1200, 630
    im = Image.new("RGBA", (W, H), INK)
    # off-canvas spotlights
    halftone(im, 1288, 168, 250, LIME, 11, 2.4)
    halftone(im, 1306, 186, 250, CORAL, 11, 2.1)
    halftone(im, -30, 560, 210, CORAL, 10, 2.2)
    halftone(im, -12, 542, 180, LIME, 10, 1.8)

    # hard-offset cards: shadow first, same angle, shifted down-right.
    # Both cards sit fully inside the frame; title occupies the center.
    shadow_l = solid_card(176, 246, CORAL)
    card_l = punch_card()
    rotated_paste(im, shadow_l, 126 + 11, 330 + 11, -8)
    rotated_paste(im, card_l, 126, 330, -8)

    shadow_r = solid_card(150, 210, LIME, radius=0)
    card_r = versus_card(150, 210)
    rotated_paste(im, shadow_r, 1086 + 11, 300 + 11, 6)
    rotated_paste(im, card_r, 1086, 300, 6)

    # spine
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, 12, H), fill=LIME)
    d.rectangle((12, 0, 18, H), fill=CORAL)

    # title block — measure, then center in the safe field above the footer
    sora = font(118, 900)
    pati = font(168, 900)
    sub = font(26, 700)
    sora_w = text_width("СОРАШИ", sora, -1)
    # match ПАТИ to the СОРАШИ measure
    pati_natural = text_width("ПАТИ", pati, 0)
    pati_track = (sora_w - pati_natural) / 3
    sub_track = 7
    h1 = text_height("СОРАШИ", sora)
    h2 = text_height("ПАТИ", pati)
    h3 = text_height("острослов", sub)
    gap1 = 6
    gap2 = 22
    block_h = h1 + gap1 + h2 + gap2 + h3
    # optically centered, nudged up so the footer bars stay clear
    top = int((H - block_h) / 2 - 18)
    cx = W / 2 + 6  # spine steals a few pixels on the left

    y = top
    # lime ghost then coral slab then cream face
    draw_tracked(d, "СОРАШИ", cx - sora_w / 2 - 3, y - 2, sora, LIME, -1)
    draw_tracked(d, "СОРАШИ", cx - sora_w / 2 + 8, y + 8, sora, CORAL, -1)
    draw_tracked(d, "СОРАШИ", cx - sora_w / 2, y, sora, CREAM, -1)
    y += h1 + gap1
    x2 = cx - sora_w / 2
    draw_tracked(d, "ПАТИ", x2 - 3, y - 2, pati, LIME, pati_track)
    draw_tracked(d, "ПАТИ", x2 + 9, y + 9, pati, CORAL, pati_track)
    draw_tracked(d, "ПАТИ", x2, y, pati, CREAM, pati_track)
    y += h2 + gap2
    sub_w = text_width("острослов", sub, sub_track)
    draw_tracked(d, "острослов", cx - sub_w / 2 + 4, y + 4, sub, CORAL, sub_track)
    draw_tracked(d, "острослов", cx - sub_w / 2, y, sub, LIME, sub_track)

    # print rules under the lockup, still clear of the edge
    rule_y = y + h3 + 18
    d.rectangle((cx - sub_w / 2, rule_y + 5, cx + sub_w / 2, rule_y + 11), fill=CORAL)
    d.rectangle((cx - sub_w / 2, rule_y, cx + sub_w / 2, rule_y + 6), fill=LIME)

    # footer misregister — drawn before the type so a rule never cuts a letter
    d.rectangle((0, H - 16, W, H), fill=CORAL)
    d.rectangle((36, H - 30, W, H - 20), fill=LIME)

    # color chips, bottom left, above the footer
    chips_y = H - 58
    d.rectangle((40, chips_y, 58, chips_y + 18), fill=LIME)
    d.rectangle((62, chips_y, 80, chips_y + 18), fill=CORAL)
    d.rectangle((84, chips_y, 102, chips_y + 18), fill=CREAM)

    crop_marks(d, W, H, inset=32, arm=18)
    grain(im, 22)
    print(
        f"OG title x {cx - sora_w / 2:.0f}-{cx + sora_w / 2:.0f} "
        f"y {top}-{rule_y + 11:.0f} width {sora_w:.0f} ({sora_w / W:.0%})"
    )
    return im.convert("RGB")


def render_banner():
    W, H = 1200, 264
    im = Image.new("RGBA", (W, H), INK)
    # scenery lives on the right and may enter the feed-overlay strips
    halftone(im, 1180, 70, 200, LIME, 10, 2.2)
    halftone(im, 1200, 88, 200, CORAL, 10, 2.0)
    halftone(im, 1040, 250, 120, CORAL, 9, 1.8)

    shadow_r = solid_card(140, 180, LIME, radius=0)
    card_r = versus_card_banner()
    rotated_paste(im, shadow_r, 960 + 8, 118 + 8, 5)
    rotated_paste(im, card_r, 960, 118, 5)

    shadow_l = solid_card(118, 156, CORAL)
    card_l = punch_card_banner()
    rotated_paste(im, shadow_l, 748 + 8, 156 + 8, -6)
    rotated_paste(im, card_l, 748, 156, -6)

    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, 10, H), fill=LIME)
    d.rectangle((10, 0, 15, H), fill=CORAL)

    # Lockup: left half, above the midline, clear of the bottom fifth (y<211)
    # and clear of the right half (x<600).
    sora = font(58, 900)
    pati = font(78, 900)
    sub = font(20, 700)
    sora_w = text_width("СОРАШИ", sora, 0)
    pati_natural = text_width("ПАТИ", pati, 0)
    pati_track = max(0, (sora_w - pati_natural) / 3)
    sub_track = 4
    h1 = text_height("СОРАШИ", sora)
    h2 = text_height("ПАТИ", pati)
    h3 = text_height("острослов", sub)
    x = 48
    y = 28
    draw_tracked(d, "СОРАШИ", x - 2, y - 2, sora, LIME, 0)
    draw_tracked(d, "СОРАШИ", x + 5, y + 5, sora, CORAL, 0)
    draw_tracked(d, "СОРАШИ", x, y, sora, CREAM, 0)
    y += h1 + 2
    draw_tracked(d, "ПАТИ", x - 2, y - 2, pati, LIME, pati_track)
    draw_tracked(d, "ПАТИ", x + 6, y + 6, pati, CORAL, pati_track)
    draw_tracked(d, "ПАТИ", x, y, pati, CREAM, pati_track)
    y += h2 + 12
    draw_tracked(d, "острослов", x + 3, y + 3, sub, CORAL, sub_track)
    draw_tracked(d, "острослов", x, y, sub, LIME, sub_track)
    sub_w = text_width("острослов", sub, sub_track)
    rule_y = y + h3 + 8
    d.rectangle((x, rule_y + 4, x + sub_w, rule_y + 8), fill=CORAL)
    d.rectangle((x, rule_y, x + sub_w, rule_y + 4), fill=LIME)

    # bottom strip is scenery only — no type. Stops before the right-hand cards.
    d.rectangle((0, H - 12, W, H), fill=CORAL)
    d.rectangle((28, H - 22, 560, H - 16), fill=LIME)

    crop_marks(d, W, H, inset=18, arm=12)
    grain(im, 18)
    print(
        f"BAN glyphs x {x:.0f}-{x + sora_w:.0f} y 26-{rule_y + 8:.0f} "
        f"right-limit 600 bottom-limit {H * 0.8:.0f}"
    )
    return im.convert("RGB")


def punch_card_banner():
    w, h = 118, 156
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, h - 1), radius=3, fill=CREAM)
    d.rectangle((0, 0, 9, h), fill=LIME)
    d.rectangle((20, 20, w - 16, 30), fill=INK)
    d.rectangle((20, 46, w - 34, 56), fill=CORAL)
    d.rectangle((20, 72, w - 18, 82), fill=INK)
    d.ellipse((w - 42, h - 46, w - 14, h - 18), outline=CORAL, width=4)
    return im


def versus_card_banner():
    w, h = 140, 180
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, w, 82), fill=LIME)
    d.rectangle((0, 94, w, h), fill=CORAL)
    d.rectangle((0, 82, w, 94), fill=CREAM)
    d.rectangle((14, 20, 36, 42), fill=INK)
    d.rectangle((14, 116, 36, 138), fill=INK)
    d.rectangle((46, 28, w - 14, 38), fill=INK)
    d.rectangle((46, 124, w - 26, 134), fill=CREAM)
    return im


def main():
    og = render_og()
    ban = render_banner()
    og.save("/workspace/.grok/brand/og-raw.png", "PNG")
    ban.save("/workspace/.grok/brand/banner-raw.png", "PNG")
    print("og", og.size, "banner", ban.size)


if __name__ == "__main__":
    main()

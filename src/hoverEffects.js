export function applyHoverEffect(element) {
  if (!element) return

  const lerp = (start, end, factor) => {
    return (1 - factor) * start + factor * end
  }

  function handleMouseMove(e) {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = Math.sqrt(
      (e.clientX - centerX) ** 2 + (e.clientY - centerY) ** 2
    )
    const maxDistance = Math.sqrt(
      (rect.width / 2) ** 2 + (rect.height / 2) ** 2
    )

    const isMenu = element.classList[0] === "floating__menu-Main"

    const hoverArea = isMenu ? 1.3 : 0.7

    if (distance < maxDistance * hoverArea) {
      const offsetX = (e.clientX - centerX) * 0.4
      const offsetY = (e.clientY - centerY) * 0.4
      const scale = 1.15

      const smoothOffsetX = lerp(0, offsetX, 0.7)
      const smoothOffsetY = lerp(0, offsetY, 0.7)

      element.style.transition = "transform 0.3s ease-out"
      element.style.transform = `translate(${smoothOffsetX}px, ${smoothOffsetY}px) scale(${scale})`
      element.style.zIndex = isMenu ? "100" : "1"
    } else {
      element.style.transition = "transform 0.3s ease-in-out"
      element.style.transform = "translate(0, 0) scale(1)"
      element.style.zIndex = isMenu ? "100" : "1"
    }
  }

  document.addEventListener("mousemove", handleMouseMove)

  return () => {
    document.removeEventListener("mousemove", handleMouseMove)
  }
}

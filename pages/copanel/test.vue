<template>
    <div>
        <vue-cal :drag-to-create-threshold="10" @cell-drag-start="onCellDragStart" @cell-drag-end="onCellDragEnd"
            @cell-click="onCellClick" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, onUnmounted, watch } from 'vue'
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

// حالت برای تشخیص درگ
const isDragging = ref(false)

const onCellDragStart = (event) => {
    console.log('Drag started')
    isDragging.value = true
}

const onCellDragEnd = (event) => {
    console.log('Drag ended')

    // متد مورد نظر شما اینجا اجرا شود
    yourCustomMethod(event)

    // با تاخیر کوچک flag را reset کنید
    setTimeout(() => {
        isDragging.value = false
    }, 50)
}

const onCellClick = (event) => {
    // اگر درگ انجام شده بود، از اجرای کلیک جلوگیری کنید
    if (isDragging.value) {
        console.log('Click ignored because of drag')
        return
    }

    console.log('Simple click - execute click methods')
    yourClickMethod(event)
}

const yourCustomMethod = (event) => {
    // این متد فقط هنگام درگ اجرا می‌شود
    console.log('Method executed ONLY on drag', event)
}

const yourClickMethod = (event) => {
    // این متد فقط هنگام کلیک ساده اجرا می‌شود
    console.log('Method executed ONLY on click', event)
}
</script>
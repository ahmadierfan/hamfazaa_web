<template>
    <div>
        <WebHomeIntro />
        <WebHomeServices />
        <WebHomeFaqSection />
        <WebHomeOrganizationSizes />
        <WebHomeTraditionalVsModern />
    </div>
</template>

<script setup>
useHead({
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "همفضا - نرم افزار مدیریت فضای کار اشتراکی",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "سامانه جامع مدیریت فضای کار اشتراکی با قابلیت رزرو آنلاین و مدیریت هوشمند",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "IRR"
            }
        })
    }]
})

definePageMeta({
    layout: 'blank',
})
</script>
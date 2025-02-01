import React from 'react'

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-24">
    <h2 className="text-3xl font-bold text-center mb-16">
      How It Works
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-4">
          <span role="img" aria-label="template">🎨</span> 1
        </div>
        <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
        <p className="text-muted-foreground">Select from our tech-focused banner templates</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-4">
          <span role="img" aria-label="customize">⚡️</span> 2
        </div>
        <h3 className="text-xl font-semibold mb-2">Customize</h3>
        <p className="text-muted-foreground">Add your code snippets and tech stack badges</p>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-primary mb-4">
          <span role="img" aria-label="export">🚀</span> 3
        </div>
        <h3 className="text-xl font-semibold mb-2">Export</h3>
        <p className="text-muted-foreground">Download your banner in the perfect size</p>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks
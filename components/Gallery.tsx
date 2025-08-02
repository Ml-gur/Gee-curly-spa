import React, { useState } from 'react'
import { Eye, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { TikTokIcon } from './SocialMediaIcons'

export function Gallery() {
  const [showMore, setShowMore] = useState(false)
  const [expandedPreview, setExpandedPreview] = useState(false)

  // Gallery images with varied heights for masonry effect - Updated with GeeCurly images
  const galleryImages = [
    // Authentic GeeCurly Salon images first - using reliable hosted images
    {
      id: 1,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753688200/geecurly_team_nail_session.jpg',
      alt: 'GeeCurly Salon - Happy team enjoying nail care session with authentic salon atmosphere',
      height: 280,
      category: 'team',
      featured: true
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753688201/geecurly_nail_art_session.jpg',
      alt: 'GeeCurly Salon - Professional nail care service with happy clients celebrating natural beauty',
      height: 260,
      category: 'nails',
      featured: true
    },
    // Existing curated images
    {
      id: 3,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683879/Braids_xjnqib.jpg',
      alt: 'Beautiful braiding styles',
      height: 250,
      category: 'braids'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683880/sallon_qkqdig.jpg',
      alt: 'Modern salon interior',
      height: 200,
      category: 'salon'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683879/manicure_fxjdnw.jpg',
      alt: 'Professional nail care',
      height: 180,
      category: 'nails'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683879/Braids2_khdyce.jpg',
      alt: 'Elegant braided hairstyles',
      height: 220,
      category: 'braids'
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683879/pedicure_jtvtca.jpg',
      alt: 'Relaxing pedicure services',
      height: 200,
      category: 'nails'
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683879/group_qexm6g.jpg',
      alt: 'Happy clients and team',
      height: 180,
      category: 'team'
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753684823/saloonist_sceayx.jpg',
      alt: 'Professional stylist at work',
      height: 250,
      category: 'team'
    },
    {
      id: 10,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753684824/saloonists_ccr7fv.jpg',
      alt: 'Our expert team',
      height: 200,
      category: 'team'
    },
    {
      id: 11,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753683880/nailsgroup_vyd4oi.jpg',
      alt: 'Group nail session',
      height: 180,
      category: 'nails'
    },
    {
      id: 12,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753685236/braiding_y39r45.jpg',
      alt: 'Traditional braiding techniques',
      height: 240,
      category: 'braids'
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753685235/treatment_wnk1wm.jpg',
      alt: 'Hair treatment session',
      height: 190,
      category: 'treatment'
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753685236/wigin_pokrio.jpg',
      alt: 'Professional wig installation',
      height: 220,
      category: 'wigs'
    },
    {
      id: 15,
      src: 'https://res.cloudinary.com/deasyoglq/image/upload/v1753685235/natural_n5fsbo.jpg',
      alt: 'Natural hair styling',
      height: 200,
      category: 'natural'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Hair coloring service',
      height: 230,
      category: 'coloring'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Relaxing spa atmosphere',
      height: 180,
      category: 'spa'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional hair consultation',
      height: 210,
      category: 'consultation'
    }
  ]

  // Preview gallery images (first 4 for compact view) - prioritize new GeeCurly images
  const previewImages = galleryImages.slice(0, 4)
  const displayImages = showMore ? galleryImages : galleryImages.slice(0, 12)

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-b from-electric-pink-light/20 to-teal-mint-light/20">
      <div className="container-mobile">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-electric-pink/20 rounded-full px-6 py-2 mb-6">
            <Eye className="w-4 h-4 text-electric-pink mr-2" />
            <span className="text-sm font-medium text-gray-700 font-inter">Our Work Gallery</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-inter">
            Beautiful
            <span className="block bg-gradient-to-r from-electric-pink to-deep-purple bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            See the amazing transformations we create for our beautiful clients at GeeCurly Salon. 
            Every style tells a story of confidence and elegance.
          </p>
        </div>

        {/* Featured GeeCurly Images Showcase */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-inter">
              <span className="bg-gradient-to-r from-electric-pink to-teal-mint bg-clip-text text-transparent">
                Authentic GeeCurly Experience
              </span>
            </h3>
            <p className="text-gray-600 font-inter">Real moments from our salon captured with our amazing clients</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Featured Image 1 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-electric-pink/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={galleryImages[0].src}
                  alt="GeeCurly Salon - Happy team enjoying nail care session with authentic salon atmosphere"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-2 font-inter">Team Bonding & Nail Care</h4>
                <p className="text-sm text-gray-600 font-inter">Authentic GeeCurly Salon atmosphere with our happy clients</p>
                <div className="mt-3 inline-flex items-center space-x-1 bg-electric-pink-light/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-electric-pink">✨ Featured</span>
                </div>
              </div>
            </div>

            {/* Featured Image 2 */}
            <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-mint/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src={galleryImages[1].src}
                  alt="GeeCurly Salon - Professional nail care service with happy clients celebrating natural beauty"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-800 mb-2 font-inter">Professional Nail Art Session</h4>
                <p className="text-sm text-gray-600 font-inter">Expert care with joy and laughter at GeeCurly Salon</p>
                <div className="mt-3 inline-flex items-center space-x-1 bg-teal-mint-light/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-teal-mint">✨ Featured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Preview Gallery */}
        <div className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 font-inter">Complete Gallery</h3>
              <button
                onClick={() => setExpandedPreview(!expandedPreview)}
                className="flex items-center space-x-2 text-electric-pink hover:text-electric-pink-dark transition-colors font-inter"
              >
                <span className="text-sm font-medium">
                  {expandedPreview ? 'Show Less' : 'View Gallery'}
                </span>
                {expandedPreview ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Compact Preview (2x2 Grid) */}
            {!expandedPreview && (
              <div className="grid grid-cols-2 gap-3">
                {previewImages.map((image) => (
                  <div 
                    key={image.id}
                    className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden"
                    onClick={() => setExpandedPreview(true)}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 right-2 text-white">
                        <p className="text-xs font-medium font-inter">{image.alt}</p>
                      </div>
                      <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1">
                        <Eye className="w-3 h-3 text-white" />
                      </div>
                      {image.featured && (
                        <div className="absolute top-2 left-2 bg-electric-pink/80 backdrop-blur-sm rounded-full px-2 py-1">
                          <span className="text-xs font-medium text-white">✨</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Expanded Masonry Grid */}
            {expandedPreview && (
              <div className="animate-fadeIn">
                <div className="masonry-grid" style={{ maxHeight: 'none' }}>
                  {displayImages.map((image) => (
                    <div 
                      key={image.id}
                      className="masonry-item group cursor-pointer relative"
                      style={{ height: `${image.height}px` }}
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <div className="absolute bottom-2 left-2 right-2 text-white">
                          <p className="text-sm font-medium font-inter">{image.alt}</p>
                        </div>
                        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                        {image.featured && (
                          <div className="absolute top-2 left-2 bg-electric-pink/80 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-xs font-medium text-white">✨ New</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {!showMore && (
                  <div className="text-center mt-8">
                    <button 
                      onClick={() => setShowMore(true)}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-pink to-deep-purple text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-inter"
                    >
                      <span>View More Work</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Before & After Showcase - Using uploaded images directly */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 font-inter">
            Before & After Transformations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transformation 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://res.cloudinary.com/deasyoglq/image/upload/v1753692313/beforehair_ed21hq.jpg"
                  alt="Hair treatment transformation - before and after"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 font-inter">Hair Treatment Transformation</h4>
                <p className="text-sm text-gray-600 font-inter">Professional hair care results</p>
              </div>
            </div>

            {/* Transformation 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://res.cloudinary.com/deasyoglq/image/upload/v1753692313/beforenafter_o5831s.jpg"
                  alt="Styling transformation - before and after"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 font-inter">Styling Transformation</h4>
                <p className="text-sm text-gray-600 font-inter">Complete makeover results</p>
              </div>
            </div>

            {/* Transformation 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://res.cloudinary.com/deasyoglq/image/upload/v1753692313/hair_fuqb3b.jpg"
                  alt="Hair styling transformation - before and after"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 font-inter">Hair Styling Excellence</h4>
                <p className="text-sm text-gray-600 font-inter">Expert styling transformation</p>
              </div>
            </div>

            {/* Transformation 4 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://res.cloudinary.com/deasyoglq/image/upload/v1753692608/braidafter_wg32xq.jpg"
                  alt="Braiding transformation - before and after"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 font-inter">Braiding Transformation</h4>
                <p className="text-sm text-gray-600 font-inter">Beautiful protective styling</p>
              </div>
            </div>

            {/* Transformation 5 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <ImageWithFallback
                  src="https://res.cloudinary.com/deasyoglq/image/upload/v1753692608/naturalafter_heny7b.jpg"
                  alt="Natural hair transformation - before and after"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2 font-inter">Natural Hair Enhancement</h4>
                <p className="text-sm text-gray-600 font-inter">Enhanced natural beauty</p>
              </div>
            </div>
          </div>
        </div>

        {/* TikTok Gallery CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-electric-pink/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-electric-pink/20 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-inter">
              See More on TikTok
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-inter">
              Follow @gee_curly_salon for daily transformations, styling tips, and behind-the-scenes content. 
              Join our 1M+ community of beauty lovers!
            </p>
            
            <button 
              onClick={() => window.open('https://www.tiktok.com/@gee_curly_salon', '_blank')}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-inter"
            >
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <TikTokIcon className="w-4 h-4" fill="white" />
              </div>
              <span>Follow on TikTok</span>
              <div className="bg-white/20 rounded-full px-2 py-1">
                <span className="text-sm font-bold">1M+</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
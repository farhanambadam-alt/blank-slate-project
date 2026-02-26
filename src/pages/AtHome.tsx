import { useState } from 'react';
import { MapPin, Star, Clock, Shield, Bell, Search, Play, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGender } from '@/contexts/GenderContext';
import { atHomeArtists } from '@/data/atHomeData';

const AtHome = () => {
  const navigate = useNavigate();
  const { gender, setGender } = useGender();
  const [searchQuery, setSearchQuery] = useState('');
  const availableArtists = atHomeArtists.filter((a) => a.isAvailable);
  const hasArtists = availableArtists.length > 0;

  return (
    <div className="min-h-screen relative pb-20">
      {/* Header */}
      <div className="px-5 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-foreground font-extrabold text-left text-[22px] tracking-tight">
              𝑨𝒕 𝑯𝒐𝒎𝒆
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin size={12} className="text-primary" />
              <span className="text-[12px] font-body text-muted-foreground">Koramangala, Bangalore</span>
            </div>
          </div>
          <button className="relative p-2.5 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-sm">
            <Bell size={17} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 mt-4">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for artists or services"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-2xl text-[13px] font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Gender Toggle */}
      <div className="flex justify-center mt-5 mb-2">
        <div className="bg-card/80 backdrop-blur-sm rounded-full p-1.5 border border-border shadow-sm flex gap-1">
          <button
            onClick={() => setGender('female')}
            className={`px-8 py-2.5 rounded-full text-[13px] font-heading font-semibold transition-all duration-300 min-h-[40px] ${
              gender === 'female'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Women
          </button>
          <button
            onClick={() => setGender('male')}
            className={`px-8 py-2.5 rounded-full text-[13px] font-heading font-semibold transition-all duration-300 min-h-[40px] ${
              gender === 'male'
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Men
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-[12px] font-body text-muted-foreground px-10 mt-1 mb-5 leading-relaxed">
        Explore beauty professionals offering home services in your area
      </p>

      {/* Divider */}
      <div className="mx-5 border-t border-border/60 mb-5" />

      {/* Content */}
      {hasArtists ? (
        <div className="px-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-[16px] text-foreground">
              Available Artists Nearby
            </h2>
            <span className="text-[12px] font-body text-primary font-medium">
              {availableArtists.length} found
            </span>
          </div>

          <div className="space-y-4">
            {availableArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border shadow-sm overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
              >
                <div className="p-4">
                  {/* Artist info row */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative">
                      <div className="w-[68px] h-[68px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                        <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-success border-2 border-card" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-[15px] text-foreground leading-tight">{artist.name}</h3>
                      <p className="text-[12px] font-body text-muted-foreground mt-0.5">{artist.specialty}</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="flex items-center gap-1 bg-secondary px-2 py-0.5 rounded-lg">
                          <Star size={11} className="text-accent fill-accent" />
                          <span className="text-[12px] font-heading font-semibold text-foreground">{artist.rating}</span>
                        </div>
                        <span className="text-[11px] text-muted-foreground">({artist.reviewCount})</span>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-0.5">
                          <MapPin size={10} /> {artist.distance}
                        </span>
                      </div>
                      {/* Trust badges */}
                      <div className="flex gap-2 mt-2.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-lg border border-primary/12">
                          <Shield size={10} />
                          {artist.yearsExp} Yrs Exp
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-heading font-bold text-success bg-success/10 px-2.5 py-1 rounded-lg border border-success/15">
                          <Clock size={10} />
                          {artist.onTimePercent}% On-Time
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Work thumbnails */}
                  <div className="flex gap-2 mt-3.5 overflow-x-auto scrollbar-hide">
                    <button
                      onClick={() => navigate(`/artist/${artist.id}`)}
                      className="relative w-[80px] h-[80px] flex-shrink-0 rounded-xl overflow-hidden ring-1 ring-border"
                    >
                      <img src={artist.videoThumbnail} alt="Video" className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
                          <Play size={10} className="text-foreground ml-0.5" />
                        </div>
                      </div>
                    </button>
                    {artist.workPhotos.map((photo, i) => (
                      <div key={i} className="w-[80px] h-[80px] flex-shrink-0 rounded-xl overflow-hidden ring-1 ring-border">
                        <img src={photo} alt={`Work ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>

                  {/* View Profile button */}
                  <button
                    onClick={() => navigate(`/artist/${artist.id}`)}
                    className="w-full mt-3.5 bg-primary text-primary-foreground font-heading font-semibold text-[13px] py-3 rounded-xl active:scale-[0.97] transition-transform min-h-[44px]"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-5 pt-16 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-secondary/60 flex items-center justify-center mb-6">
            <MapPin size={48} className="text-muted-foreground/40" />
          </div>
          <h2 className="font-heading font-bold text-[18px] text-foreground mb-2">
            No Artists in Your Area Yet
          </h2>
          <p className="text-[14px] font-body text-muted-foreground max-w-[280px] leading-relaxed">
            We're expanding fast! Get notified as soon as artists become available near you.
          </p>
          <button className="mt-6 bg-primary text-primary-foreground font-heading font-semibold text-[14px] px-8 py-3.5 rounded-2xl active:scale-95 transition-transform min-h-[48px] flex items-center gap-2">
            <Bell size={16} />
            Notify Me When Available
          </button>
        </div>
      )}
    </div>
  );
};

export default AtHome;

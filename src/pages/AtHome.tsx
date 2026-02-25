import { useState } from 'react';
import { MapPin, Star, Clock, Shield, Bell, ChevronDown, Navigation, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGender } from '@/contexts/GenderContext';
import { atHomeArtists } from '@/data/atHomeData';
import GenderBackground from '@/components/GenderBackground';

const AtHome = () => {
  const navigate = useNavigate();
  const { gender, setGender } = useGender();
  const availableArtists = atHomeArtists.filter((a) => a.isAvailable);
  const hasArtists = availableArtists.length > 0;

  return (
    <div className="min-h-screen relative pb-20 overflow-hidden">
      {/* Dynamic SVG Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <GenderBackground />
      </div>

      {/* Map Header */}
      <div className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80">
          {/* Stylized map lines */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <path d="M0,100 Q50,50 100,80 T200,60 T300,90 T400,70" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />
              <path d="M0,140 Q80,100 150,130 T300,110 T400,140" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
              <path d="M50,0 Q60,80 70,200" fill="none" stroke="hsl(var(--border))" strokeWidth="0.8" />
              <path d="M200,0 Q210,60 190,200" fill="none" stroke="hsl(var(--border))" strokeWidth="0.8" />
              <path d="M320,0 Q330,100 340,200" fill="none" stroke="hsl(var(--border))" strokeWidth="0.8" />
            </svg>
          </div>
          {/* User location pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Navigation size={16} className="text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/15" />
            </div>
          </div>
          {/* Artist pins */}
          {availableArtists.slice(0, 3).map((artist, i) => {
            const positions = [
            { top: '25%', left: '25%' },
            { top: '60%', left: '70%' },
            { top: '35%', left: '75%' }];

            return (
              <div key={artist.id} className="absolute" style={positions[i]}>
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-card shadow-md">
                  <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
                </div>
              </div>);

          })}
        </div>
        {/* Header overlay */}
        <div className="absolute top-0 left-0 right-0 px-5 pt-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-foreground font-extrabold text-left text-xl">𝑨𝒕 𝑯𝒐𝒎𝒆</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <MapPin size={12} className="text-primary" />
                <span className="text-[12px] font-body text-muted-foreground">Koramangala, Bangalore</span>
                <ChevronDown size={10} className="text-muted-foreground" />
              </div>
            </div>
            <button className="relative p-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl">
              <Bell size={17} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Gender Toggle */}
      <div className="flex justify-center -mt-4 relative z-10 mb-4">
        <div className="bg-card/90 backdrop-blur-md rounded-full p-1 border border-border shadow-lg flex">
          <button
            onClick={() => setGender('female')}
            className={`px-6 py-2.5 rounded-full text-[13px] font-heading font-semibold transition-all duration-300 min-h-[40px] ${
            gender === 'female' ?
            'bg-primary text-primary-foreground shadow-md' :
            'text-muted-foreground'}`
            }>

            Women
          </button>
          <button
            onClick={() => setGender('male')}
            className={`px-6 py-2.5 rounded-full text-[13px] font-heading font-semibold transition-all duration-300 min-h-[40px] ${
            gender === 'male' ?
            'bg-primary text-primary-foreground shadow-md' :
            'text-muted-foreground'}`
            }>

            Men
          </button>
        </div>
      </div>

      {/* Content */}
      {hasArtists ?
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
            {availableArtists.map((artist, index) =>
          <div
            key={artist.id}
            className="bg-card/95 backdrop-blur-sm rounded-2xl border border-border card-shadow overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}>

                <div className="p-4">
                  {/* Artist info row */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative">
                      <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border">
                        <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-success border-2 border-card" />
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

                  {/* Work thumbnails with video preview */}
                  <div className="flex gap-2 mt-3.5 overflow-x-auto scrollbar-hide">
                    {/* Video thumbnail */}
                    <button
                  onClick={() => navigate(`/artist/${artist.id}`)}
                  className="relative w-[80px] h-[80px] flex-shrink-0 rounded-xl overflow-hidden ring-1 ring-border">

                      <img src={artist.videoThumbnail} alt="Video" className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
                          <Play size={10} className="text-foreground ml-0.5" />
                        </div>
                      </div>
                    </button>
                    {artist.workPhotos.map((photo, i) =>
                <div key={i} className="w-[80px] h-[80px] flex-shrink-0 rounded-xl overflow-hidden ring-1 ring-border">
                        <img src={photo} alt={`Work ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                )}
                  </div>

                  {/* View Profile button */}
                  <button
                onClick={() => navigate(`/artist/${artist.id}`)}
                className="w-full mt-3.5 bg-primary text-primary-foreground font-heading font-semibold text-[13px] py-3 rounded-xl active:scale-[0.97] transition-transform min-h-[44px]">

                    View Profile
                  </button>
                </div>
              </div>
          )}
          </div>
        </div> : (

      /* Empty State */
      <div className="px-5 pt-16 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-secondary/60 backdrop-blur-sm flex items-center justify-center mb-6">
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
        </div>)
      }
    </div>);

};

export default AtHome;
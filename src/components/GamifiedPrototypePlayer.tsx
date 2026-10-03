import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Terminal, Sparkles, CheckCircle2, Heart, Award, ShieldCheck, X } from 'lucide-react';

interface Scene {
  id: number;
  title: string;
  concept: string;
  code: string;
  output: string;
  dialogue?: string;
  visualState: {
    bgGradient: string;
    hills: boolean;
    characters: { name: string; icon: string; role: string }[];
    crops: boolean;
    cropText?: string;
    happinessLevel: number;
    happinessTrend?: 'up' | 'down';
    pot: boolean;
    tractor: boolean;
    sprinkler: boolean;
  };
  explanation: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    title: "Start Screen: Empathy Field",
    concept: "Interactive Learning Game Entry",
    code: `# Empathy Field - Gamified STEM & Programming
class EmpathyFieldGame:
    def __init__(self):
        self.state = "READY_TO_START"
        self.villagers = []
        self.farmland = ["plot_1", "plot_2", "plot_3"]

game = EmpathyFieldGame()
print("Starting Empathy Field...")`,
    output: "Starting Empathy Field... [Press START]",
    dialogue: "Welcome to Empathy Field! Learn programming through village simulation.",
    visualState: {
      bgGradient: "from-sky-300 via-sky-200 to-emerald-200",
      hills: true,
      characters: [],
      crops: false,
      happinessLevel: 50,
      pot: false,
      tractor: false,
      sprinkler: false
    },
    explanation: "Introduces rural students to computational thinking through a friendly, low-bandwidth 2D agricultural community setting."
  },
  {
    id: 2,
    title: "Level 1: Team Assembly",
    concept: "Object Instantiation & Function Arguments",
    code: `new_team = join(blacksmith, farmer, builder)
print(f"Team formed with {len(new_team)} specialists!")`,
    output: "Team formed with 3 specialists: [Blacksmith, Farmer, Builder]",
    dialogue: "Team assembled: Elder Farmer, Master Builder & Village Blacksmith!",
    visualState: {
      bgGradient: "from-sky-200 via-emerald-100 to-lime-200",
      hills: true,
      characters: [
        { name: "Elder Farmer", icon: "🌾", role: "Farmer" },
        { name: "Builder", icon: "👷", role: "Builder" },
        { name: "Blacksmith", icon: "🔨", role: "Blacksmith" }
      ],
      crops: false,
      happinessLevel: 65,
      happinessTrend: "up",
      pot: false,
      tractor: false,
      sprinkler: false
    },
    explanation: "Teaches function calls, argument passing, and composite team data structures through collaborative village roles."
  },
  {
    id: 3,
    title: "Level 2: Automated Crop Planting",
    concept: "For-Loops & Iterative Processing",
    code: `for plot in farmland:
    plant(plot, "rice")
print("All farmland plots seeded with rice!")`,
    output: "Planted rice in plot_1\nPlanted rice in plot_2\nPlanted rice in plot_3",
    dialogue: "Golden rice crops seeded across the communal farmland.",
    visualState: {
      bgGradient: "from-sky-200 via-lime-100 to-emerald-200",
      hills: true,
      characters: [
        { name: "Elder Farmer", icon: "🌾", role: "Farmer" }
      ],
      crops: true,
      cropText: "Golden Rice",
      happinessLevel: 70,
      happinessTrend: "up",
      pot: false,
      tractor: false,
      sprinkler: false
    },
    explanation: "Demystifies Python for-loops by showing how a single iterative block automates repetitive agricultural planting."
  },
  {
    id: 4,
    title: "Level 3: Community Wellbeing & Conditionals",
    concept: "If-Statements & Empathy Metrics",
    code: `for person in villagers:
    if person.happiness < 40:
        comfort(person)
        print(f"Comforted {person.name}. Empathy +10")`,
    output: "Low happiness detected in village. Initiating community comfort routine...",
    dialogue: "Listening to community concerns and raising village morale.",
    visualState: {
      bgGradient: "from-slate-200 via-indigo-100 to-purple-200",
      hills: true,
      characters: [
        { name: "Village Crowd", icon: "👥", role: "Community" }
      ],
      crops: true,
      cropText: "Rice Fields",
      happinessLevel: 45,
      happinessTrend: "down",
      pot: false,
      tractor: false,
      sprinkler: false
    },
    explanation: "Binds emotional intelligence with boolean condition checks (`if person.happiness < 40`), encouraging student engagement."
  },
  {
    id: 5,
    title: "Level 4: Smart Irrigation Control",
    concept: "If-Else Branching & Attribute Testing",
    code: `for crop in all_crops:
    if crop.hydration < 20:
        water(crop)
    else:
        # These crops are okay for now
        print(crop.name + " is hydrated.")`,
    output: "RICE IS HYDRATED.\nSprinkler system active on dry zones.",
    dialogue: "RICE IS HYDRATED",
    visualState: {
      bgGradient: "from-sky-300 via-blue-100 to-emerald-200",
      hills: true,
      characters: [
        { name: "Elder Farmer", icon: "🌾", role: "Farmer" }
      ],
      crops: true,
      cropText: "Hydrated Rice",
      happinessLevel: 80,
      happinessTrend: "up",
      pot: false,
      tractor: false,
      sprinkler: true
    },
    explanation: "Illustrates binary decision branching (`if / else`) through simulated water management and soil hydration sensors."
  },
  {
    id: 6,
    title: "Level 5: Harvest State Verification",
    concept: "Membership Operators (`in`) & State Checks",
    code: `if crop in crops:
    print("Crop is grown. Proceed to harvest.")
else:
    print("Crop not found. Cannot harvest.")`,
    output: "CROPS ARE GROWN. Harvest cycle started successfully.",
    dialogue: "CROPS ARE GROWN - Bountiful harvest ready for the village!",
    visualState: {
      bgGradient: "from-amber-100 via-yellow-100 to-emerald-200",
      hills: true,
      characters: [
        { name: "Harvest Crew", icon: "🧑‍🌾", role: "Harvesters" }
      ],
      crops: true,
      cropText: "Golden Harvest",
      happinessLevel: 90,
      happinessTrend: "up",
      pot: false,
      tractor: false,
      sprinkler: false
    },
    explanation: "Demonstrates Python container membership checks (`in`) and guard clauses before triggering game harvest events."
  },
  {
    id: 7,
    title: "Level 6: Village Feast Function",
    concept: "Function Definition & Compound Actions",
    code: `def hold_feast():
    # A function combines multiple actions
    cook_food("stew", 5) # Use 5 units of food to make stew
    for villager in villagers:
        villager.happiness += 30
    print("The feast was a success! Happiness increased.")

hold_feast()`,
    output: "Cooked 5 pots of hearty stew.\nAll villagers gained +30 happiness!\nTHE FEAST WAS A SUCCESS!",
    dialogue: "THE FEAST WAS A SUCCESS! HAPPINESS INCREASED",
    visualState: {
      bgGradient: "from-orange-100 via-amber-100 to-rose-200",
      hills: true,
      characters: [
        { name: "Feast Gathering", icon: "👨‍👩‍👧‍👦", role: "Villagers" }
      ],
      crops: false,
      happinessLevel: 100,
      happinessTrend: "up",
      pot: true,
      tractor: false,
      sprinkler: false
    },
    explanation: "Teaches modular software engineering — grouping multiple actions inside reusable `def` functions."
  },
  {
    id: 8,
    title: "Level 7: Robust Error Handling",
    concept: "Try-Except Blocks & Exception Safety",
    code: `try:
    give_item("plow", "New_Guy") # Tries to give a plow to 'New_Guy'
except VillagerNotFound:
    print("I couldn't find New Guy to give the plow to.")`,
    output: "Exception Caught: VillagerNotFound\nOutput: I couldn't find New Guy to give the plow to.",
    dialogue: "I COULDN'T FIND NEW GUY TO GIVE THE PLOW TO.",
    visualState: {
      bgGradient: "from-sky-200 via-indigo-100 to-emerald-200",
      hills: true,
      characters: [
        { name: "Elder Farmer", icon: "🌾", role: "Farmer" }
      ],
      crops: false,
      happinessLevel: 95,
      pot: false,
      tractor: true,
      sprinkler: false
    },
    explanation: "Introduces defensive coding and graceful error recovery with `try / except` to prevent program crashes."
  }
];

interface GamifiedPrototypePlayerProps {
  onClose?: () => void;
}

export const GamifiedPrototypePlayer: React.FC<GamifiedPrototypePlayerProps> = ({ onClose }) => {
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scene = scenes[currentSceneIdx];

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSceneIdx((prev) => (prev + 1) % scenes.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#12132e] border border-indigo-500/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              SIH 2025 Prototype Walkthrough
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Scene {currentSceneIdx + 1} of {scenes.length}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
            {scene.title}
          </h3>
          <p className="text-xs text-indigo-300 font-medium">
            Core Concept: {scene.concept}
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setCurrentSceneIdx((prev) => (prev === 0 ? scenes.length - 1 : prev - 1))}
            className="p-2 rounded-xl bg-[#1a1b46] hover:bg-[#252763] text-slate-200 border border-purple-900/40 transition-colors cursor-pointer"
            title="Previous Scene"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-600 text-black shadow-lg shadow-amber-500/20'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-900/30'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Auto-Walkthrough</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play Prototype Video Loop</span>
              </>
            )}
          </button>

          <button
            onClick={() => setCurrentSceneIdx((prev) => (prev + 1) % scenes.length)}
            className="p-2 rounded-xl bg-[#1a1b46] hover:bg-[#252763] text-slate-200 border border-purple-900/40 transition-colors cursor-pointer"
            title="Next Scene"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setCurrentSceneIdx(0);
              setIsPlaying(false);
            }}
            className="p-2 rounded-xl bg-[#1a1b46] hover:bg-[#252763] text-slate-200 border border-purple-900/40 transition-colors cursor-pointer"
            title="Restart from Level 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Gameplay Screen Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: 2D Interactive Game Canvas View */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl bg-black flex flex-col justify-between relative min-h-[340px] sm:min-h-[400px]">
          
          {/* Game Top Banner */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
            <div className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>EMPATHY FIELD v1.0</span>
            </div>

            {/* Happiness Gauge */}
            <div className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
              <span>Village Happiness: {scene.visualState.happinessLevel}%</span>
            </div>
          </div>

          {/* 2D Landscape Canvas */}
          <div className={`w-full h-full flex-1 bg-gradient-to-b ${scene.visualState.bgGradient} relative flex flex-col justify-end p-6 transition-colors duration-700 overflow-hidden`}>
            
            {/* Sun and Clouds */}
            <div className="absolute top-8 left-12 w-12 h-12 rounded-full bg-amber-300/80 blur-sm"></div>
            <div className="absolute top-10 right-20 w-24 h-8 bg-white/70 rounded-full blur-[1px]"></div>
            <div className="absolute top-16 left-1/3 w-32 h-10 bg-white/60 rounded-full blur-[1px]"></div>

            {/* Sprinkler Animation if active */}
            {scene.visualState.sprinkler && (
              <div className="absolute bottom-28 right-1/4 z-10 flex flex-col items-center animate-bounce">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center text-blue-200 font-bold text-xs shadow-lg shadow-blue-500/50">
                  💧
                </div>
                <div className="text-[10px] font-mono font-bold text-blue-900 bg-blue-100/90 px-1.5 py-0.5 rounded shadow">
                  Sprinkler Active
                </div>
              </div>
            )}

            {/* Tractor if active */}
            {scene.visualState.tractor && (
              <div className="absolute bottom-24 right-10 z-10 animate-pulse">
                <div className="text-4xl sm:text-5xl">🚜</div>
                <div className="text-[10px] font-mono font-bold text-indigo-900 bg-indigo-100/90 px-2 py-0.5 rounded shadow text-center">
                  Harvester Ready
                </div>
              </div>
            )}

            {/* Stew Pot if active */}
            {scene.visualState.pot && (
              <div className="absolute bottom-20 left-12 z-10 flex flex-col items-center">
                <div className="text-5xl animate-bounce">🍲</div>
                <div className="text-[11px] font-mono font-bold text-amber-950 bg-amber-200 px-2 py-0.5 rounded shadow">
                  Village Stew Feast
                </div>
              </div>
            )}

            {/* Speech Bubble / Dialogue */}
            {scene.dialogue && (
              <div className="absolute top-16 left-6 max-w-[85%] z-20 animate-fade-in">
                <div className="p-3 rounded-2xl bg-white/95 text-slate-900 font-bold text-xs sm:text-sm border-2 border-slate-900 shadow-xl relative">
                  <span>"{scene.dialogue}"</span>
                  <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white border-r-2 border-b-2 border-slate-900 rotate-45"></div>
                </div>
              </div>
            )}

            {/* Rolling Hills Visual Layer */}
            <div className="relative z-10 flex items-end justify-between pt-20">
              
              {/* Characters */}
              <div className="flex items-end gap-3 sm:gap-6">
                {scene.visualState.characters.map((char, cIdx) => (
                  <div key={cIdx} className="flex flex-col items-center space-y-1">
                    <div className="text-3xl sm:text-4xl hover:scale-110 transition-transform">
                      {char.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-800 bg-white/80 backdrop-blur-sm px-1.5 py-0.2 rounded border border-slate-400">
                      {char.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Crops Visual */}
              {scene.visualState.crops && (
                <div className="flex items-end gap-1.5 pb-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="text-2xl sm:text-3xl animate-pulse">
                      🌾
                    </div>
                  ))}
                  <div className="text-[10px] font-bold text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded border border-amber-400 self-center">
                    {scene.visualState.cropText || "Farmland Crops"}
                  </div>
                </div>
              )}

            </div>

            {/* Green Hills Base Layer */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-700 via-emerald-600 to-green-500 rounded-t-[50%_20px]"></div>
          </div>

          {/* Bottom Banner */}
          <div className="p-3 bg-[#0a0b18] border-t border-indigo-900/60 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Designed for: <strong className="text-white">Low-Bandwidth Rural Classrooms</strong>
            </span>
            <span className="text-indigo-300 font-mono text-[11px]">
              Theme: Game Development
            </span>
          </div>

        </div>

        {/* Right: Interactive Code Console & Output */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          
          {/* Terminal / Code Editor */}
          <div className="rounded-2xl bg-[#0d0e24] border border-indigo-500/30 overflow-hidden shadow-xl flex flex-col">
            <div className="px-4 py-2.5 bg-[#14163a] border-b border-indigo-950 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-slate-200">
                  main.py — Python Simulation Console
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                Executed
              </span>
            </div>

            {/* Code Snippet */}
            <div className="p-4 font-mono text-xs text-indigo-200 leading-relaxed overflow-x-auto bg-[#090a1a]">
              <pre><code>{scene.code}</code></pre>
            </div>

            {/* Console Output */}
            <div className="p-3 bg-[#050611] border-t border-indigo-950 font-mono text-[11px] text-slate-300 space-y-1">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Console Output:</span>
              </div>
              <div className="text-emerald-400 whitespace-pre-line pl-2 border-l border-emerald-500/40">
                {scene.output}
              </div>
            </div>
          </div>

          {/* Educational Insight Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-500/30 space-y-2">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Pedagogical Objective</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {scene.explanation}
            </p>
          </div>

          {/* Scene selector buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSceneIdx(idx);
                  setIsPlaying(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer ${
                  currentSceneIdx === idx
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-[#12132e] text-slate-400 hover:text-white border border-purple-900/30'
                }`}
              >
                Lvl {s.id}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

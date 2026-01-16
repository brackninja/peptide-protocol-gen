const PROTOCOLS = {
  injury: {
    title: "Tissue Repair & Injury Recovery",
    description: "Accelerates healing of tendons, ligaments, and soft tissue. **Synergy Stack:** BPC-157 + TB-500 is the 'Gold Standard' repair stack.",
    peptides: [
      {
        name: "BPC-157",
        dosage: "250-500 mcg",
        frequency: "Twice daily",
        method: "Subcutaneous or Oral",
        cycle: "4-6 weeks",
        mechanism: "Upregulates Growth Hormone receptors on tendon fibroblasts and increases angiogenesis (new blood vessel formation).",
        synergy: "Works structurally. While BPC-157 builds the 'scaffolding' and blood flow, TB-500 recruits the cells to do the work.",
        benefit: "Directly repairs damaged soft tissue, reduces inflammation, and protects the gut lining."
      },
      {
        name: "TB-500 (Thymosin Beta-4)",
        dosage: "2-5 mg",
        frequency: "Twice weekly",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Sequesters actin (a cell building block) and increases cell migration to the site of injury.",
        synergy: "Works as the 'Foreman'. It directs cell migration to the repair site prepared by BPC-157.",
        benefit: "Accelerates tissue regeneration, reduces scar tissue formation, and improves flexibility."
      },
      {
        name: "GHK-Cu",
        dosage: "1-2 mg",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "30 days",
        mechanism: "Stimulates collagen synthesis and breakdown of unhealthy fibrin (scar tissue).",
        synergy: "Prevents the formation of chaotic scar tissue while BPC-157 and TB-500 drive rapid healing.",
        benefit: "Remodels old injuries, improves skin elasticity, and ensures healed tissue functions correctly."
      },
      {
        name: "CJC-1295 / Ipamorelin",
        dosage: "100/100 mcg",
        frequency: "Daily (5 days on / 2 days off)",
        method: "Subcutaneous injection",
        cycle: "12 weeks",
        mechanism: "Stimulates the pituitary gland to release the body's own Growth Hormone in a natural pulsatile manner.",
        synergy: "Systemic Amplifier. Provides the high levels of Growth Hormone and IGF-1 needed by the other peptides to fuel the repair process.",
        benefit: "Creates a systemic anabolic environment conducive to total body repair and recovery."
      }
    ]
  },
  anti_aging: {
    title: "Cellular Senescence & Systemic Anti-Aging",
    description: "Targeting mitochondrial health and telomeres. **Synergy Stack:** MOTS-c + SS-31 for total mitochondrial restoration.",
    peptides: [
      {
        name: "Epitalon",
        dosage: "10 mg",
        frequency: "Daily",
        method: "Intramuscular or Subcutaneous",
        cycle: "10 days (repeat every 6-12 months)",
        mechanism: "Induces telomerase activity (lengthening telomeres) and regulates the pineal gland.",
        synergy: "Resets the 'biological clock' while other peptides like Thymosin Alpha-1 clean up senescent (zombie) cells.",
        benefit: "Extends cellular lifespan, restores circadian rhythms, and improves deep sleep."
      },
      {
        name: "MOTS-c",
        dosage: "5-10 mg (Titrate up)",
        frequency: "3 times weekly",
        method: "Subcutaneous injection",
        cycle: "4 weeks on, 4 weeks off",
        mechanism: "Acts as a mitochondrial signal, regulating metabolic homeostasis and insulin sensitivity directly at the cellular level.",
        synergy: "Works on mitochondrial *genetics* and signaling, while SS-31 works on mitochondrial *structure*.",
        benefit: "Prevents age-related metabolic decline, improves energy, and mimics the effects of exercise."
      },
      {
        name: "SS-31 (Elamipretide)",
        dosage: "4 mg",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "4-8 weeks",
        mechanism: "Concentrates in the inner mitochondrial membrane, preventing oxidative damage to cardiolipin.",
        synergy: "The 'Shield'. Protects the mitochondria so MOTS-c can drive them to produce energy efficiently.",
        benefit: "Restores ATP production in aging cells, reducing fatigue and oxidative stress."
      },
      {
        name: "Humanin",
        dosage: "2-5 mg",
        frequency: "Twice weekly",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Inhibits apoptosis (cell death) and protects cells from oxidative stress and toxicity.",
        synergy: "Provides a 'safety net' for cells, allowing Epitalon and GHK-Cu to work on repair without cellular stress.",
        benefit: "Protects the heart, brain, and eyes from degeneration."
      },
      {
        name: "GHK-Cu",
        dosage: "2 mg",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "30 days",
        mechanism: "Reset genes to a younger state (gene modulation) and repairs DNA damage.",
        synergy: "The 'Architect'. Resets gene expression to a youthful profile, amplifying the effects of all other anti-aging peptides.",
        benefit: "Visibly tightens skin, improves hair growth, and reduces systemic inflammation."
      }
    ]
  },
  fat_loss: {
    title: "Metabolic Optimization & Fat Loss",
    description: "Enhances lipid oxidation and insulin sensitivity. **Synergy Stack:** Semaglutide + AOD-9604 + 5-Amino-1MQ.",
    peptides: [
      {
        name: "CJC-1295 / Ipamorelin",
        dosage: "100/100 mcg",
        frequency: "Daily (5 days on / 2 days off)",
        method: "Subcutaneous injection",
        cycle: "12 weeks on, 4 weeks off",
        mechanism: "Increases GH release, which directly increases lipolysis (fat breakdown) and muscle retention.",
        synergy: "The 'Engine'. Keeps metabolic rate high while other peptides target specific fat pathways.",
        benefit: "Burns fat while preserving lean muscle mass, preventing the 'skinny fat' look."
      },
      {
        name: "Semaglutide (GLP-1)",
        dosage: "0.25 mg (titrated up)",
        frequency: "Weekly",
        method: "Subcutaneous injection",
        cycle: "Continuous",
        mechanism: "Agonist of GLP-1 receptors in the brain and gut, signaling satiety and slowing gastric emptying.",
        synergy: "The 'Gatekeeper'. Controls caloric input so AOD-9604 and CJC-1295 can effectively burn stored fat.",
        benefit: "Drastically reduces appetite, controls blood sugar, and removes the struggle of caloric restriction."
      },
      {
        name: "Tirzepatide (GLP-1 / GIP)",
        dosage: "2.5 mg (titrated up)",
        frequency: "Weekly",
        method: "Subcutaneous injection",
        cycle: "Continuous",
        mechanism: "Dual agonist (GLP-1 and GIP) that improves insulin sensitivity and fat metabolism more potently than GLP-1 alone.",
        synergy: "The 'Dual Threat'. Targets two metabolic pathways for superior glycemic control and weight loss.",
        benefit: "Currently the most potent peptide for significant weight loss and metabolic correction."
      },
      {
        name: "Retatrutide (Triple Agonist)",
        dosage: "2-4 mg (titrated up)",
        frequency: "Weekly",
        method: "Subcutaneous injection",
        cycle: "Continuous",
        mechanism: "Triple agonist targeting GLP-1, GIP, and Glucagon receptors. Actively burns energy via the Glucagon pathway.",
        synergy: "The 'Triple Threat'. Glucagon activation increases basal metabolic rate (energy expenditure) while GLP-1/GIP control appetite.",
        benefit: "The 'King of Fat Loss'. Mobilizes stored fat for energy while crushing appetite. Most potent agent currently known."
      },
      {
        name: "AOD-9604",
        dosage: "300 mcg",
        frequency: "Daily (Morning fasting)",
        method: "Subcutaneous injection",
        cycle: "6-12 weeks",
        mechanism: "Fragment of HGH that exclusively targets fat cell destruction without affecting blood sugar.",
        synergy: "The 'Burner'. Liberates free fatty acids into the bloodstream to be burned, especially when insulin is managed by Semaglutide.",
        benefit: "Targets stubborn body fat precisely without the side effects of full HGH."
      },
      {
        name: "5-Amino-1MQ",
        dosage: "50-150 mg",
        frequency: "Daily (Oral)",
        method: "Oral Capsule",
        cycle: "8-12 weeks",
        mechanism: "Inhibits NNMT enzyme, preventing the storage of fat and forcing the body to burn energy.",
        synergy: "The 'Accelerator'. Increases basal metabolic rate (BMR) independently of exercise.",
        benefit: "Reverses diet-induced obesity and increases cellular NAD+ levels."
      },
      {
        name: "Tesofensine",
        dosage: "500 mcg",
        frequency: "Daily (Morning)",
        method: "Oral Capsule",
        cycle: "8-12 weeks",
        mechanism: "Inhibits reuptake of dopamine (motivation), serotonin (satiety), and noradrenaline (energy).",
        synergy: "The 'Motivator'. Provides the mental drive and energy to exercise while chemically suppressing hunger.",
        benefit: "Powerful appetite suppression combined with increased energy expenditure."
      },
      {
        name: "Tesamorelin",
        dosage: "1-2 mg",
        frequency: "Daily (Morning fasting)",
        method: "Subcutaneous injection",
        cycle: "3-6 months",
        mechanism: "Growth Hormone Releasing Hormone (GHRH) analog that specifically targets Visceral Adipose Tissue (VAT).",
        synergy: "The 'Belly Burner'. Highly specific for dangerous visceral fat that other peptides miss.",
        benefit: "Clinically proven to reduce visceral belly fat and improve lipid profiles."
      }
    ]
  },
  immunity: {
    title: "Immune System Modulation",
    description: "Strengthens defense and regulates inflammation. **Synergy Stack:** TA-1 + Thymosin Beta-4 (TB-500).",
    peptides: [
      {
        name: "Thymosin Alpha-1",
        dosage: "1.5 mg",
        frequency: "Twice weekly (prophylactic)",
        method: "Subcutaneous injection",
        cycle: "6-8 weeks",
        mechanism: "Educates T-Cells (immune soldiers) to recognize threats like viruses and cancer.",
        synergy: "The 'General'. Coordinates the attack, while TB-500 prevents the battle (inflammation) from destroying healthy tissue.",
        benefit: "Boosts antiviral defense and prevents autoimmunity by regulating the immune response."
      },
      {
        name: "Thymalin",
        dosage: "10 mg",
        frequency: "Daily for 10 days",
        method: "Intramuscular injection",
        cycle: "Repeat every 6 months",
        mechanism: "Regulates the number and ratio of T and B lymphocytes.",
        synergy: "Works synergistically with Epitalon to restore immune function in the elderly.",
        benefit: "Restores cellular immunity and reduces frequency of acute infections."
      },
      {
        name: "TB-500 (Thymosin Beta-4)",
        dosage: "2-5 mg",
        frequency: "Twice weekly",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Downregulates inflammatory cytokines produced during an immune response.",
        synergy: "The 'Peacemaker'. Controls the collateral damage of a strong immune response initiated by TA-1.",
        benefit: "Prevents cytokine storms and chronic inflammation."
      },
      {
        name: "LL-37",
        dosage: "100-200 mcg",
        frequency: "Daily (short term)",
        method: "Subcutaneous injection",
        cycle: "2-4 weeks max",
        mechanism: "Punching holes in bacterial cell walls and destroying biofilms.",
        synergy: "The 'Special Forces'. Exposes hidden bacteria (biofilms) so Thymosin Alpha-1's T-Cells can destroy them.",
        benefit: "Eradicates chronic, low-grade infections (like Lyme or Mold) that suppress the immune system."
      },
      {
        name: "BPC-157",
        dosage: "500 mcg",
        frequency: "Twice daily",
        method: "Oral (Arg-salt) or SubQ",
        cycle: "Continuous",
        mechanism: "Restores the tight junctions in the intestinal lining (Leaky Gut).",
        synergy: "The 'Wall'. Stops toxins from entering the blood, significantly reducing the workload for the immune system.",
        benefit: "Eliminates systemic inflammation at its source (the gut)."
      }
    ]
  },
  cognition: {
    title: "Cognitive Enhancement (Nootropic)",
    description: "Focus, memory, and neuroprotection. **Synergy Stack:** Semax + Selank (The 'Russian Stack').",
    peptides: [
      {
        name: "Semax",
        dosage: "200-600 mcg",
        frequency: "Daily (morning)",
        method: "Nasal Spray",
        cycle: "2-4 weeks",
        mechanism: "Increases BDNF (Brain-Derived Neurotrophic Factor) and NGF (Nerve Growth Factor).",
        synergy: "The 'Stimulator'. Increases processing speed and memory, balanced perfectly by Selank's calming effect.",
        benefit: "Sharp focus, faster learning, and protection against mental fatigue."
      },
      {
        name: "Selank",
        dosage: "200-600 mcg",
        frequency: "Daily",
        method: "Nasal Spray",
        cycle: "2-4 weeks",
        mechanism: "Modulates dopamine and serotonin; inhibits enzymes that degrade enkephalins (natural painkillers).",
        synergy: "The 'Stabilizer'. Reduces the anxiety often associated with high-performance states induced by Semax.",
        benefit: "Clear-headed calmness, reduced anxiety, and improved mood."
      },
      {
        name: "Cerebrolysin",
        dosage: "5-10 ml",
        frequency: "2-3 times weekly",
        method: "Intramuscular injection",
        cycle: "4 weeks",
        mechanism: "A cocktail of neuropeptides that directly triggers neurogenesis (new neuron growth).",
        synergy: "The 'Rebuilder'. Provides the raw materials for brain repair, while Semax stimulates the growth signals.",
        benefit: "Profound recovery from TBI, stroke, or age-related cognitive decline."
      },
      {
        name: "Dihexa",
        dosage: "10-20 mg",
        frequency: "Daily",
        method: "Transdermal/Oral",
        cycle: "4-6 weeks",
        mechanism: "Enhances HGF (Hepatocyte Growth Factor) to create new synapses between neurons (synaptogenesis).",
        synergy: "The 'Connector'. Builds new neural pathways, allowing you to retain the information learned while using Semax.",
        benefit: "Orders of magnitude more potent than BDNF for forming new connections. Drastically improves long-term memory."
      },
      {
        name: "FGL (FGL-loop)",
        dosage: "10 mg",
        frequency: "3 times weekly",
        method: "Subcutaneous injection",
        cycle: "4 weeks",
        mechanism: "Mimics NCAM (Neural Cell Adhesion Molecule), strengthening the connection between neurons.",
        synergy: "The 'Glue'. Stabilizes the new connections formed by Dihexa and Semax.",
        benefit: "Enhances memory retention and prevents cognitive decline."
      },
      {
        name: "Cortagen",
        dosage: "10 mg",
        frequency: "Daily for 10 days",
        method: "Intramuscular injection",
        cycle: "Repeat every 6 months",
        mechanism: "Bioregulator peptide that normalizes the function of the cerebral cortex.",
        synergy: "Works with Pinealon to restore optimal electrical activity in the brain.",
        benefit: "Increases stress resilience and cognitive recovery."
      },
      {
        name: "Pinealon",
        dosage: "10 mg",
        frequency: "Daily for 10 days",
        method: "Intramuscular injection",
        cycle: "Repeat every 6 months",
        mechanism: "Short peptide bioregulator preventing oxidative stress in brain tissue.",
        synergy: "The 'Protector'. Shields neurons from hypoxia and excitotoxicity.",
        benefit: "improves focus, clarity, and protects against brain aging."
      }
    ]
  },
  sleep: {
    title: "Sleep Optimization",
    description: "Deep sleep and circadian entrainment. **Synergy Stack:** DSIP + Epitalon.",
    peptides: [
      {
        name: "DSIP (Delta Sleep Inducing Peptide)",
        dosage: "100 mcg",
        frequency: "Daily (before bed)",
        method: "Subcutaneous injection",
        cycle: "Short term (1-2 weeks)",
        mechanism: "Modulates corticosterone levels and directly promotes Delta (Slow Wave) Sleep.",
        synergy: "The 'Initiator'. Puts the brain into the deep state required for Epitalon to heal the circadian clock.",
        benefit: "Induces deep, restorative physical sleep and reduces stress."
      },
      {
        name: "Epitalon",
        dosage: "3-10 mg",
        frequency: "Daily (before bed)",
        method: "Subcutaneous injection",
        cycle: "10-20 days",
        mechanism: "Stimulates the pineal gland to produce melatonin naturally and regulate cortisol rhythms.",
        synergy: "The 'Regulator'. Fixes the underlying rhythm, ensuring you sleep well even after stopping DSIP.",
        benefit: "Total circadian reset and improved sleep quality long-term."
      },
      {
        name: "CJC-1295 (No Dac) / Ipamorelin",
        dosage: "100 mcg",
        frequency: "Daily (5 days on / 2 days off)",
        method: "Subcutaneous injection",
        cycle: "Ongoing",
        mechanism: "Amplifies the natural Growth Hormone pulse that occurs during the first few hours of sleep.",
        synergy: "The 'Maximizer'. Takes advantage of the deep sleep induced by DSIP to maximize recovery hormones.",
        benefit: "Improved recovery, fat loss, and feeling refreshed upon waking."
      }
    ]
  },
  tanning: {
    title: "Melanogenesis & UV Protection",
    description: "Stimulates melanin production for tanning and photo-protection. **Synergy Stack:** Melanotan 2 + Tyrosine.",
    peptides: [
      {
        name: "Melanotan 2",
        dosage: "250-500 mcg",
        frequency: "Daily (loading) then maintenance",
        method: "Subcutaneous injection",
        cycle: "Until desired tan achieved",
        mechanism: "Non-selective agonist of melanocortin receptors (MC1R-MC5R), stimulating melanin production.",
        synergy: "The 'Driver'. Directly flips the switch for pigment creation, regardless of sun exposure.",
        benefit: "Rapid, deep tan with minimal UV exposure, offering natural protection against sunburn."
      },
      {
        name: "Melanotan 1 (Afamelanotide)",
        dosage: "1-2 mg",
        frequency: "Daily",
        method: "Subcutaneous",
        cycle: "Pre-summer or ongoing",
        mechanism: "More selective for MC1R, producing pigment with fewer side effects (nausea/flushing) than MT-2.",
        synergy: "The 'Cleaner' choice. Stacks well with antioxidants to ensuring the skin browns without oxidative damage.",
        benefit: "Pure pigmentation increase for photoprotection and aesthetics."
      },
      {
        name: "L-Tyrosine (Supplement)",
        dosage: "500-1000 mg",
        frequency: "Daily",
        method: "Oral",
        cycle: "Continuous",
        mechanism: "Precursor amino acid that melanocytes convert into melanin.",
        synergy: "The 'Fuel'. Melanotan provides the signal, but Tyrosine provides the raw material to build the pigment.",
        benefit: "Ensures the body doesn't run out of building blocks during rapid tanning."
      }
    ]
  },
  gut_health: {
    title: "Gut Health & Systemic Inflammation",
    description: "Restoring the microbiome and intestinal barrier. **Synergy Stack:** Larazotide + BPC-157 + KPV.",
    peptides: [
      {
        name: "Larazotide Acetate (AT-1001)",
        dosage: "0.5 mg",
        frequency: "Before meals (3x daily)",
        method: "Oral Capsule",
        cycle: "4-8 weeks",
        mechanism: "Zonulin antagonist. Directly closes the 'tight junctions' in the gut lining to stop leakiness.",
        synergy: "The 'Gatekeeper'. Physically seals the gut barrier while BPC-157 repairs the tissue behind it.",
        benefit: "The only specific treatment for increased intestinal permeability (Leaky Gut)."
      },
      {
        name: "BPC-157 (Arg-Salt)",
        dosage: "500 mcg",
        frequency: "Twice daily",
        method: "Oral Capsule",
        cycle: "Continuous",
        mechanism: "Stable gastric pentadecapeptide that survives digestion to heal the GI tract lining.",
        synergy: "The 'Mason'. Rebuilds the structural integrity of the gut lining.",
        benefit: "Heals ulcers, IBS, and reduces food sensitivities."
      },
      {
        name: "KPV (Lysine-Proline-Valine)",
        dosage: "200-400 mcg",
        frequency: "Daily",
        method: "Oral or Subcutaneous",
        cycle: "Ongoing",
        mechanism: "Terminal fragment of alpha-MSH. Potent anti-inflammatory that targets the NF-κB pathway in the gut.",
        synergy: "The 'Firefighter'. Extinguishes the inflammation in the gut (Colitis/IBD) so healing can occur.",
        benefit: "Powerful for calming inflammatory bowel conditions and Candida overgrowth."
      },
      {
        name: "LL-37",
        dosage: "100 mcg (Titrate carefully)",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "2-4 weeks",
        mechanism: "Antimicrobial peptide that kills bacteria, viruses, and fungi.",
        synergy: "The 'Exterminator'. Clears out bad bacteria (SIBO) and fungal infections to reset the microbiome.",
        benefit: "Essential for clearing difficult gut infections and biofilms."
      },
      {
        name: "VIP (Vasoactive Intestinal Peptide)",
        dosage: "50 mcg (Titrate up)",
        frequency: "Daily (nasal or subq)",
        method: "Nasal Spray / SubQ",
        cycle: "Ongoing",
        mechanism: "Regulates gut motility, water/electrolyte secretion, and is a potent anti-inflammatory.",
        synergy: "Restores the rhythm of the gut, crucial for those with constipation or motility issues.",
        benefit: "Improves digestion and dampens chronic inflammation (CIRS/Mold)."
      }
    ]
  },
  pain: {
    title: "Neuropathy & Chronic Pain",
    description: "Repairing nerves and dampening pain signals. **Synergy Stack:** ARA-290 + BPC-157.",
    peptides: [
      {
        name: "ARA-290 (Cibinetide)",
        dosage: "4 mg",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "30 days",
        mechanism: "Agonist of the Innate Repair Receptor (IRR). Specifically targets small nerve fiber regeneration.",
        synergy: "The 'Nerve Healer'. The most specific peptide for repairing damaged nerves (neuropathy).",
        benefit: "Profound relief from neuropathic pain, fibromyalgia, and small fiber neuropathy."
      },
      {
        name: "BPC-157",
        dosage: "250-500 mcg",
        frequency: "Twice daily",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Reduces neuro-inflammation and promotes healing of soft tissue compressing nerves.",
        synergy: "Reduces the 'background noise' of inflammation so ARA-290 can work on the nerves.",
        benefit: "Systemic pain reduction and structural repair."
      },
      {
        name: "Thymosin Beta-4 (TB-500)",
        dosage: "2-5 mg",
        frequency: "Weekly",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Promotes cell migration and neurogenesis.",
        synergy: "Works with ARA-290 to encourage nerve regrowth and fluidity.",
        benefit: "Reduces scar tissue around nerves and improves mobility."
      }
    ]
  },
  sexual_health: {
    title: "Libido & Sexual Function",
    description: "Central and peripheral enhancement of sexual function. **Synergy Stack:** PT-141 + Oxytocin.",
    peptides: [
      {
        name: "PT-141 (Bremelanotide)",
        dosage: "1-2 mg",
        frequency: "As needed (45 min prior)",
        method: "Subcutaneous injection / Nasal",
        cycle: "As needed",
        mechanism: "Non-selective melanocortin agonist acting on the CNS (hypothalamus) to trigger arousal.",
        synergy: "The 'Switch'. Turns on the desire in the brain, independent of blood flow mechanics (Viagra).",
        benefit: "Treats HSDD (Hypoactive Sexual Desire Disorder) and ED by increasing central drive."
      },
      {
        name: "Melanotan 2",
        dosage: "250-500 mcg",
        frequency: "As needed or Daily",
        method: "Subcutaneous injection",
        cycle: "Until tan/effect achieved",
        mechanism: "Melanocortin agonist. Similar to PT-141 but with potent tanning side effects.",
        synergy: "Often used as a dual-purpose agent for tanning and libido enhancement.",
        benefit: "Significant increase in libido and erectile quality + deep tan."
      },
      {
        name: "Kisspeptin-10",
        dosage: "100 mcg",
        frequency: "As needed or Daily",
        method: "Subcutaneous injection",
        cycle: "Ongoing",
        mechanism: "Stimulates GnRH release, increasing LH and FSH, which boosts natural Testosterone production.",
        synergy: "The 'Booster'. Enhances the hormonal substrate (Testosterone) required for libido.",
        benefit: "Natural testosterone support and testicular health."
      },
      {
        name: "Oxytocin",
        dosage: "20-50 IU",
        frequency: "As needed (Before intimacy)",
        method: "Nasal Spray / SubQ",
        cycle: "As needed",
        mechanism: "The 'Love Hormone'. Increases trust, bonding, and physical sensitivity.",
        synergy: "The 'Bond'. Adds the emotional connection and intensifies orgasm when stacked with PT-141.",
        benefit: "Enhanced intimacy, relaxation, and orgasmic intensity."
      }
    ]
  },
  hair_growth: {
    title: "Hair Follicle Restoration",
    description: "Reactivating dormant follicles. **Synergy Stack:** GHK-Cu (Topic) + Zn-Thymulin.",
    peptides: [
      {
        name: "GHK-Cu (Copper Peptide)",
        dosage: "1-2% Solution",
        frequency: "Daily (Topical)",
        method: "Topical Foam/Serum",
        cycle: "Continuous",
        mechanism: "Angiogenesis (new blood flow) to the follicle and inhibition of DHT effects.",
        synergy: "The 'Fertilizer'. Increases nutrient delivery to the hair root by expanding capillaries.",
        benefit: "Thickens hair, reduces shedding, and stimulates regrowth."
      },
      {
        name: "Zn-Thymulin",
        dosage: "10-20 mg (in solution)",
        frequency: "Daily (Topical)",
        method: "Topical Spray",
        cycle: "Continuous",
        mechanism: "Zinc-bound thymic peptide. Extends the Anagen (growth) phase of the hair cycle.",
        synergy: "The 'Extender'. Keeps hair growing for longer before it falls out.",
        benefit: "Recovering lost hair density and preventing graying."
      },
      {
        name: "PTD-DBM",
        dosage: "Topical Application",
        frequency: "Daily",
        method: "Topical",
        cycle: "Cycles of 6 weeks",
        mechanism: "Prevents CXXC5 protein from inhibiting the Wnt/Beta-catenin pathway (which creates hair follicles).",
        synergy: "The 'Unlocker'. Removes the brake on follicle creation. Often stacked with Valproic Acid.",
        benefit: "Potential for creating *new* hair follicles (neogenesis)."
      },
      {
        name: "Thymosin Beta-4",
        dosage: "Topical or Injectable",
        frequency: "Daily/Weekly",
        method: "Topical/SubQ",
        cycle: "Continuous",
        mechanism: "Stem cell activation in the follicle bulge.",
        synergy: "Works with GHK-Cu to repair the scalp environment.",
        benefit: "Improved scalp health and hair quality."
      }
    ]
  },
  mitochondrial: {
    title: "Mitochondrial Health & Endurance",
    description: "Restoring cellular energy production. **Synergy Stack:** MOTS-c + SS-31.",
    peptides: [
      {
        name: "MOTS-c",
        dosage: "5-10 mg",
        frequency: "Weekly",
        method: "Subcutaneous injection",
        cycle: "4-8 weeks",
        mechanism: "Mitochondrial-derived peptide that signals the nucleus to upregulate metabolic genes.",
        synergy: "The 'Signal'. Tells the cell to build more machinery for energy production.",
        benefit: "Prevents age-related weight gain, improves insulin sensitivity, and boosts endurance."
      },
      {
        name: "SS-31 (Elamipretide)",
        dosage: "40 mg (varies)",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "4-6 weeks",
        mechanism: "Binds effectively to Cardiolipin on the inner mitochondrial membrane, stabilizing the electron transport chain.",
        synergy: "The 'Mechanic'. Fixes the actual machinery (mitochondria) so it can produce ATP efficiently.",
        benefit: "Restores energy in chronic fatigue, aging, and heart failure."
      },
      {
        name: "Humanin",
        dosage: "10 mg (varies)",
        frequency: "Daily",
        method: "Subcutaneous injection",
        cycle: "Short courses",
        mechanism: "Cytoprotective peptide that prevents cell death (apoptosis) during stress.",
        synergy: "Works with MOTS-c to protect the cell while metabolism is being upregulated.",
        benefit: "Potent protection against oxidative stress and neurodegeneration."
      }
    ]
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const ailmentSelect = document.getElementById('ailment-select');
  const customInput = document.getElementById('custom-input');
  const generateBtn = document.getElementById('generate-btn');
  const resultsSection = document.getElementById('results-section');

  // New Elements
  const modeRadios = document.querySelectorAll('input[name="search-mode"]');
  const goalContainer = document.getElementById('goal-search-container');
  const peptideContainer = document.getElementById('peptide-search-container');
  const peptideInput = document.getElementById('peptide-input');
  const peptideList = document.getElementById('peptide-list');

  let currentMode = 'goal';

  // --- INITIALIZATION ---
  populatePeptideList();

  function populatePeptideList() {
    const allPeptides = new Set();
    Object.values(PROTOCOLS).forEach(protocol => {
      protocol.peptides.forEach(p => {
        // Clean name name to remove parentheses for better finding
        const cleanName = p.name.split('(')[0].trim();
        allPeptides.add(cleanName);
        // Also add full name just in case
        allPeptides.add(p.name);
      });
    });

    // Sort and Build Options
    Array.from(allPeptides).sort().forEach(name => {
      const option = document.createElement('option');
      option.value = name;
      peptideList.appendChild(option);
    });
  }

  // --- EVENT LISTENERS ---

  // Mode Switching
  modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentMode = e.target.value;
      if (currentMode === 'goal') {
        goalContainer.classList.remove('hidden');
        peptideContainer.classList.add('hidden');
        generateBtn.innerText = "Generate Protocol";
        generateBtn.removeAttribute('disabled');
      } else {
        goalContainer.classList.add('hidden');
        peptideContainer.classList.remove('hidden');
        generateBtn.innerText = "Lookup Peptide";
        // Disable unless input has value
        if (!peptideInput.value.trim()) generateBtn.setAttribute('disabled', 'true');
      }
      resultsSection.classList.add('hidden');
    });
  });

  // Peptide Input Handling
  peptideInput.addEventListener('input', (e) => {
    if (e.target.value.trim().length > 0) {
      generateBtn.removeAttribute('disabled');
    } else {
      generateBtn.setAttribute('disabled', 'true');
    }
  });

  peptideInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !generateBtn.disabled) {
      generateBtn.click();
    }
  });

  // Goal Inputs (Legacy)
  ailmentSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      customInput.classList.remove('hidden');
      setTimeout(() => customInput.focus(), 100);
      if (customInput.value.trim() === '') generateBtn.setAttribute('disabled', 'true');
    } else {
      customInput.classList.add('hidden');
      generateBtn.removeAttribute('disabled');
    }
  });

  customInput.addEventListener('input', (e) => {
    if (e.target.value.trim().length > 0) generateBtn.removeAttribute('disabled');
    else generateBtn.setAttribute('disabled', 'true');
  });

  customInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !generateBtn.disabled) generateBtn.click();
  });


  // --- MAIN GENERATION / LOOKUP HANDLE ---
  generateBtn.addEventListener('click', () => {
    resultsSection.innerHTML = ''; // Clear previous results

    if (currentMode === 'goal') {
      const selectedAilment = ailmentSelect.value;
      if (!selectedAilment || (selectedAilment === 'custom' && !customInput.value.trim())) {
        renderError('Please select a goal or enter a custom goal.');
        return;
      }
      // Existing goal search logic
      let protocolData;

      if (selectedAilment === 'custom') {
        const customGoal = customInput.value.trim().toLowerCase() || "general health";
        const displayGoal = customInput.value.trim() || "General Health";

        // 1. Comprehensive Keyword Mapping
        const keywords = {
          // Specific categories first to prevent broad matching (e.g. "Nerve pain" matching "pain" in Injury)
          gut_health: ['gut', 'sibo', 'bloating', 'ibs', 'digestion', 'leaky', 'stomach', 'sensitivity', 'acid', 'gerd', 'ulcer'],
          pain: ['nerve', 'neuropathy', 'fibromyalgia', 'chronic', 'sting', 'burn', 'tingle', 'numb', 'hurt'],
          sexual_health: ['sex', 'libido', 'erection', 'ed', 'viagra', 'cialis', 'arousal', 'drive', 'intimacy', 'orgasm'],
          hair_growth: ['hair', 'bald', 'thinning', 'scalp', 'alopecia', 'growth'],
          mitochondrial: ['mitochondria', 'energy', 'fatigue', 'tired', 'endurance', 'atp', 'cell', 'power', 'exhausted'],
          sleep: ['sleep', 'insomnia', 'rest', 'awake', 'night', 'tired', 'circadian', 'jet lag', 'nap'],

          // Broad categories last
          injury: ['injury', 'tear', 'strain', 'sprain', 'surgery', 'wound', 'tendon', 'ligament', 'shoulder', 'knee', 'back', 'joint', 'heal', 'recovery', 'bone', 'muscle', 'ache', 'sore', 'broken', 'fracture', 'pain'],
          anti_aging: ['aging', 'wrinkle', 'skin', 'life', 'youth', 'longevity', 'stem cell', 'grey', 'face', 'looks'],
          fat_loss: ['fat', 'weight', 'obese', 'diet', 'slim', 'lean', 'metabolism', 'burn', 'cut', 'belly', 'gains', 'shred', 'glp1', 'glp-1', 'semaglutide', 'tirzepatide', 'ozempic', 'mounjaro', 'wegovy', 'zepbound', 'retatrutide', 'triple', 'loss'],
          immunity: ['immune', 'sick', 'cold', 'flu', 'virus', 'infection', 'autoimmune', 'shingles', 'defense', 'bacteria', 'antibiotic'],
          cognition: ['brain', 'focus', 'memory', 'cognitive', 'smart', 'study', 'fog', 'adhd', 'mental', 'clarity', 'alert', 'depress', 'anxiety', 'mood'],
          tanning: ['tan', 'tanning', 'sun', 'melanotan', 'pigment', 'pale', 'bronze', 'dark']
        };

        let matchedProtocolKey = null;
        for (const [key, words] of Object.entries(keywords)) {
          if (words.some(word => customGoal.includes(word))) {
            matchedProtocolKey = key;
            break;
          }
        }

        if (matchedProtocolKey) {
          // Deep copy
          const originalProtocol = PROTOCOLS[matchedProtocolKey];
          protocolData = JSON.parse(JSON.stringify(originalProtocol));
          protocolData.title = `Protocol for: ${displayGoal}`;
          protocolData.description = `Optimized from the <strong>${originalProtocol.title}</strong> to specifically address <strong>${displayGoal}</strong>.<br>${originalProtocol.description}`;
        } else {
          // --- NEW LOGIC: Dynamic Peptide Aggregation ---
          // If no full protocol matches, search for individual peptides relevant to the goal.

          let aggregatedPeptides = [];
          const uniquePeptideNames = new Set();

          // 1. Term Expansion (Map user terms to clinical keywords)
          const TERM_EXPANSION = {
            'strength': ['muscle', 'anabolic', 'growth', 'hypertrophy', 'performance', 'power'],
            'muscle': ['anabolic', 'hypertrophy', 'strength', 'tissue'],
            'cut': ['fat', 'loss', 'metabolism', 'burn', 'shred', 'lean', 'weight'],
            'energy': ['mitochondria', 'atp', 'fatigue', 'focus', 'alert'],
            'focus': ['brain', 'memory', 'cognitive', 'neuro', 'smart', 'clarity'],
            'mood': ['anxiety', 'depress', 'calm', 'serotonin', 'dopamine'],
            'sex': ['libido', 'arousal', 'erection', 'drive', 'intimacy', 'orgasm'],
            'libido': ['sex', 'arousal', 'drive', 'melanotan', 'pt-141', 'viagra'],
            'joint': ['tendon', 'ligament', 'inflammation', 'repair', 'cartilage', 'arthritis'],
            'pain': ['inflammation', 'heal', 'recovery', 'soothe', 'nerve', 'neuropathy', 'hurt'],
            'gut': ['stomach', 'digest', 'bloat', 'ibs', 'sibo', 'leak', 'food', 'acid'],
            'hair': ['bald', 'growth', 'scalp', 'thin', 'follicle', 'loss'],
            'mitochondria': ['energy', 'atp', 'endurance', 'fatigue', 'aging', 'mots-c', 'ss-31', 'tired'],
            'endurance': ['run', 'cardio', 'stamina', 'vo2', 'mitochondria', 'fast']
          };

          let searchTerms = customGoal.split(" ").filter(term => term.length > 2); // Simple tokenizer

          // Expand terms
          let expandedTerms = [...searchTerms];
          searchTerms.forEach(term => {
            for (const [key, related] of Object.entries(TERM_EXPANSION)) {
              // Check if term matches key OR is inside the related list
              if (term.includes(key) || key.includes(term) || related.some(r => r.includes(term))) {
                expandedTerms.push(key); // Add the parent category key
                expandedTerms.push(...related); // Add all related terms
              }
            }
          });

          // Remove duplicates
          expandedTerms = [...new Set(expandedTerms)];

          Object.values(PROTOCOLS).forEach(protocol => {
            protocol.peptides.forEach(p => {
              // Check mechanism, benefit, or name for matches
              // We search for the full phrase OR individual meaningful words
              const textToSearch = (p.mechanism + " " + p.benefit + " " + p.synergy + " " + p.name).toLowerCase();

              // Check for exact phrase
              const phraseMatch = textToSearch.includes(customGoal);

              // Check for individual keywords (e.g. "muscle" from "muscle strength")
              const keywordMatch = expandedTerms.some(term => textToSearch.includes(term));

              if ((phraseMatch || keywordMatch) && !uniquePeptideNames.has(p.name)) {
                uniquePeptideNames.add(p.name);
                aggregatedPeptides.push(JSON.parse(JSON.stringify(p)));
              }
            });
          });

          if (aggregatedPeptides.length > 0) {
            // We found relevant peptides!
            protocolData = {
              title: `Custom Protocol: ${displayGoal}`,
              description: `A custom-generated protocol aggregating peptides with clinical applications relevant to <strong>${displayGoal}</strong>. derived from Dr. Seeds' database.`,
              peptides: aggregatedPeptides
            };
          } else {
            // --- FALLBACK (Only if NO relevant peptides found) ---
            protocolData = {
              title: `Systemic Support: ${displayGoal}`,
              description: `We could not find peptides specifically matching "<strong>${displayGoal}</strong>" in the database. <br>Below is a standardized <strong>Systemic Repair Protocol</strong> designed to optimize general homeostasis, inflammation, and cellular health.`,
              peptides: [
                {
                  name: "BPC-157 (Body Protection Compound)",
                  dosage: "250-500 mcg",
                  frequency: "Twice daily",
                  method: "Subcutaneous injection",
                  cycle: "4-6 weeks",
                  mechanism: "Systemic repair signaling. Upregulates growth hormone receptors on fibroblasts.",
                  synergy: "Works as the foundation. Prepares the body for specific healing by reducing systemic inflammation.",
                  benefit: "Directly targets inflammation and initiates the repair cascade."
                },
                {
                  name: "KPV (Lysine-Proline-Valine)",
                  dosage: "200-400 mcg",
                  frequency: "Daily",
                  method: "Subcutaneous or Oral",
                  cycle: "Ongoing as needed",
                  mechanism: "Potent anti-inflammatory that targets multiple pathways including NF-κB.",
                  synergy: "The 'Cooler'. Reduces the inflammatory noise so BPC-157 can signal repair more effectively.",
                  benefit: "Broad-spectrum anti-inflammatory support."
                },
                {
                  name: "Thymosin Alpha-1",
                  dosage: "1.5 mg",
                  frequency: "Twice weekly",
                  method: "Subcutaneous injection",
                  cycle: "6-8 weeks",
                  mechanism: "Modulates the immune system response and reduces chronic inflammation.",
                  synergy: "Stacks with BPC-157 to prevent the immune system from over-reacting to the condition.",
                  benefit: "Regulates the body's defense systems to ensure diverse recovery."
                }
              ]
            };
          }
        }

        // Clinical Logic Injection
        protocolData.peptides.forEach(p => {
          p.mechanism = p.mechanism.replace(/tissue|injury|fat|aging|immune system|health/gi, `<strong>${displayGoal}</strong>`);
          let applicationNote = "";
          if (p.name.includes("BPC-157")) applicationNote = `As a systemic signaling peptide, BPC-157 directs healing resources specifically to the inflammation associated with <strong>${displayGoal}</strong>, restoring homeostasis.`;
          else if (p.name.includes("TB-500")) applicationNote = `By upregulating cell migration, TB-500 accelerates the repair of specific tissues compromised by <strong>${displayGoal}</strong>.`;
          else if (p.name.includes("CJC") || p.name.includes("Ipamorelin")) applicationNote = `Increases natural Growth Hormone output to provide the metabolic fuel required to overcome <strong>${displayGoal}</strong>.`;
          else if (p.name.includes("Epitalon")) applicationNote = `Resets the biological clock, ensuring the body's deep sleep cycles can effectively repair the damage from <strong>${displayGoal}</strong>.`;
          else if (p.name.includes("Semax") || p.name.includes("Selank")) applicationNote = `Modulates neurotransmitters to clear the mental fatigue often associated with <strong>${displayGoal}</strong>.`;
          else if (p.name.includes("Melanotan")) applicationNote = `Directly stimulates melanin production to achieve the specific outcome of <strong>${displayGoal}</strong> regardless of UV exposure.`;
          else if (p.name.includes("Thymosin Alpha")) applicationNote = `Modulates the immune response, ensuring the body recognizes and fights the underlying causes of <strong>${displayGoal}</strong>.`;
          else applicationNote = `Targets the underlying biological pathway to directly address the symptoms and root cause of <strong>${displayGoal}`;

          p.benefit += ` <br><br><strong style="color:var(--primary); font-size:0.95em;">🩺 Application for ${displayGoal}:</strong><br><span style="font-size:0.9em; opacity:0.9;">${applicationNote}</span>`;
        });
      } else {
        protocolData = PROTOCOLS[selectedAilment];
      }

      if (protocolData) renderProtocol(protocolData);

    } else { // Peptide Lookup Mode
      const peptideName = peptideInput.value.trim();
      if (!peptideName) {
        renderError('Please enter a peptide name.');
        return;
      }
      const details = findPeptideDetails(peptideName);
      if (details) {
        renderPeptideLookup(details); // Renamed from renderPeptideSpotlight to match existing function
      } else {
        renderError(`No matching peptide found for "${peptideName}". Try a different name or browse the list.`);
      }
    }
  });

  const renderError = (message) => {
    resultsSection.classList.add('hidden'); // Hide previous results
    resultsSection.innerHTML = `
            <div class="card" style="border-left: 4px solid var(--danger); background: rgba(239, 68, 68, 0.1);">
                <div class="card-header">
                    <h3 style="color: var(--danger); margin: 0;">Notice</h3>
                </div>
                <div class="card-body">
                    <p>${message}</p>
                </div>
            </div>
        `;
    resultsSection.classList.remove('hidden'); // Ensure the error message is visible
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  };


  // --- LOGIC FUNCTIONS ---

  const findPeptideDetails = (searchTerm) => {
    if (!searchTerm) return null;

    const normalizedSearch = searchTerm.toLowerCase().trim();
    // Remove anything in parentheses for cleaner matching for comparison
    const cleanSearchTerm = normalizedSearch.split('(')[0].trim();

    let foundPeptide = null;
    let contexts = [];

    // Scan all protocols
    Object.entries(PROTOCOLS).forEach(([key, proto]) => {
      proto.peptides.forEach(p => {
        const peptideNameLower = p.name.toLowerCase();
        const cleanPeptideName = peptideNameLower.split('(')[0].trim();

        // Match if:
        // 1. Exact match of full name
        // 2. Exact match of cleaned name
        // 3. Search term (cleaned) is in the peptide name (e.g., search "ghk" finds "GHK-Cu")
        // 4. Peptide name (cleaned) is in the search term (e.g., search "copper peptide" finds "GHK-Cu")
        if (peptideNameLower === normalizedSearch ||
          cleanPeptideName === cleanSearchTerm ||
          cleanPeptideName.includes(cleanSearchTerm) ||
          normalizedSearch.includes(cleanPeptideName)
        ) {
          // Capture the first full record as the base
          if (!foundPeptide) foundPeptide = JSON.parse(JSON.stringify(p));

          // Identify other peptides in this specific protocol (Potential Synergy)
          const synergisticPeptides = proto.peptides
            .filter(other => other.name !== p.name)
            .map(other => other.name.split('(')[0].trim());

          // Add context specific details
          contexts.push({
            protocolCheck: proto.title,
            synergy: p.synergy,
            dosage: p.dosage,
            cycle: p.cycle,
            stack: synergisticPeptides // New field
          });
        }
      });
    });

    if (!foundPeptide) return null;

    // Attach the contexts
    foundPeptide.clinicalContexts = contexts;
    return foundPeptide;
  }

  function renderPeptideLookup(data) {
    resultsSection.classList.add('hidden');

    setTimeout(() => {
      // Create Context Cards
      const contextsHtml = data.clinicalContexts.map(c => `
            <div class="peptide-card" style="margin-bottom: 1rem; border-left: 4px solid var(--primary);">
                <div class="peptide-header">
                     <div class="peptide-name" style="font-size: 1.1rem; opacity: 0.9;">Used in: ${c.protocolCheck}</div>
                </div>
                <div class="grid-row" style="margin-top:0.5rem;">
                    <div class="detail-item"><span class="label">Dosage</span><span class="value">${c.dosage}</span></div>
                    <div class="detail-item"><span class="label">Cycle</span><span class="value">${c.cycle}</span></div>
                </div>
                
                <!-- Synergistic Stack Section -->
                <div class="info-block" style="margin-top:1rem; background: rgba(255,255,255,0.03); padding: 0.8rem; border-radius: 6px;">
                    <span class="info-label" style="color: #4cc9f0; margin-bottom: 0.5rem; display: block;">🤝 Synergistic Stack (Works well with):</span>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${c.stack.map(name =>
        `<span style="background: rgba(76, 201, 240, 0.1); color: #4cc9f0; padding: 2px 8px; border-radius: 4px; font-size: 0.85rem; border: 1px solid rgba(76, 201, 240, 0.2);">${name}</span>`
      ).join('')}
                    </div>
                </div>

                <div class="info-block synergy" style="margin-top:1rem;">
                    <span class="info-label">⚡ Clinical Synergy Notes</span>
                    <p>${c.synergy}</p>
                </div>
            </div>
        `).join('');

      resultsSection.innerHTML = `
            <div class="card">
                <div class="protocol-header">
                    <div class="protocol-title">
                        <h3>🧪 Peptide Spotlight: ${data.name}</h3>
                        <p class="protocol-desc" style="font-size:1.1rem; margin-top:0.5rem;">
                           ${data.mechanism}
                        </p>
                    </div>
                </div>
                
                <h4 style="color:var(--text-muted); margin: 2rem 0 1rem 0; text-transform:uppercase; letter-spacing:1px; font-size:0.9rem;">Clinical Applications & Stacks</h4>
                <div class="peptides-grid" style="display:flex; flex-direction:column; gap:1rem;">
                    ${contextsHtml}
                </div>
            </div>
        `;

      resultsSection.classList.remove('hidden');
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  // Original Render Function for Protocols
  function renderProtocol(data) {
    resultsSection.classList.add('hidden');
    setTimeout(() => {
      const peptidesHtml = data.peptides.map(p => `
        <div class="peptide-card">
          <div class="peptide-header">
             <div class="peptide-name">${p.name}</div>
             <div class="peptide-tag">${p.mechanism}</div>
          </div>
          
          <div class="grid-row">
            <div class="detail-item"><span class="label">Dosage</span><span class="value">${p.dosage}</span></div>
            <div class="detail-item"><span class="label">Frequency</span><span class="value">${p.frequency}</span></div>
            <div class="detail-item"><span class="label">Method</span><span class="value">${p.method}</span></div>
            <div class="detail-item"><span class="label">Cycle</span><span class="value">${p.cycle}</span></div>
          </div>
          
          <div class="info-section">
            <div class="info-block mechanism"><span class="info-label">⚙️ Mechanism of Action</span><p>${p.mechanism}</p></div>
            <div class="info-block synergy"><span class="info-label">⚡ Synergy & Stacking</span><p>${p.synergy}</p></div>
            <div class="info-block outcome"><span class="info-label">🎯 Goal Alignment</span><p>${p.benefit}</p></div>
          </div>
        </div>
      `).join('');

      resultsSection.innerHTML = `
        <div class="card">
          <div class="protocol-header">
            <div class="protocol-title"><h3>${data.title}</h3><p class="protocol-desc">${data.description}</p></div>
          </div>
          <div class="peptides-grid">${peptidesHtml}</div>
        </div>
      `;
      resultsSection.classList.remove('hidden');
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
});

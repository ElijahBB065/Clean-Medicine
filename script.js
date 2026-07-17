// ==========================================
// 1. THE FULL MEDICINE DATABASE (100 MEDICATIONS)
// ==========================================
const medicineData = {
  acetaminophen: {
    name: "Acetaminophen (Tylenol)",
    allergens: "Contains Sorbitol and Artificial Dye (Red #40).",
    foodInteraction: "Avoid alcohol entirely. Mixing alcohol can cause severe liver complications.",
    historyWarning: "Avoid if you have a history of liver disease or chronic alcohol use."
  },
  acyclovir: {
    name: "Acyclovir (Zovirax)",
    allergens: "May contain lactose or starch matrices in oral formulations.",
    foodInteraction: "Drink plenty of fluids while taking to prevent crystallization in kidneys.",
    historyWarning: "Use with caution in elderly individuals or those with renal impairment."
  },
  albuterol: {
    name: "Albuterol (ProAir/Ventolin)",
    allergens: "Inhalers are usually lactose-free, but some dry-powder inhalers contain lactose milk proteins.",
    foodInteraction: "Limit caffeine intake; combining with caffeine can cause severe heart palpitations.",
    historyWarning: "Use with caution if you have a history of high blood pressure, irregular heartbeats, or seizures."
  },
  alendronate: {
    name: "Alendronate (Fosamax)",
    allergens: "Contains lactose. Gluten-free.",
    foodInteraction: "Must be taken first thing in the morning with plain water only. Do not eat or drink anything else for 30 minutes.",
    historyWarning: "Avoid if you cannot sit or stand upright for at least 30 minutes, or have esophagus problems."
  },
  allopurinol: {
    name: "Allopurinol (Zyloprim)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Drink plenty of water (2-3 liters a day) to prevent kidney stones. Take after meals.",
    historyWarning: "Discontinue immediately and see a doctor if you develop any skin rash or hives."
  },
  alprazolam: {
    name: "Alprazolam (Xanax)",
    allergens: "Contains lactose, corn starch, and sodium benzoate.",
    foodInteraction: "DO NOT consume grapefruit or grapefruit juice. Avoid alcohol completely.",
    historyWarning: "High risk of dependency. Avoid if you have acute narrow-angle glaucoma or severe respiratory depression."
  },
  amiodarone: {
    name: "Amiodarone (Cordarone)",
    allergens: "Contains lactose and starch fractions.",
    foodInteraction: "Avoid grapefruit juice strictly. Stays in the body for months after stopping.",
    historyWarning: "Black box warnings for pulmonary and hepatic toxicity. Periodic chest X-rays needed."
  },
  amitriptyline: {
    name: "Amitriptyline (Elavil)",
    allergens: "Contains lactose, starch, and synthetic color lakes.",
    foodInteraction: "Avoid alcohol; increases extreme sedative effects and dizziness.",
    historyWarning: "Can cause severe QT prolongation. Avoid during acute recovery phase following a heart attack."
  },
  amlodipine: {
    name: "Amlodipine (Norvasc)",
    allergens: "Microcrystalline cellulose and sodium starch glycolate.",
    foodInteraction: "Can be taken with or without food. Avoid excessive grapefruit consumption.",
    historyWarning: "May cause peripheral edema (severe ankle swelling) or worsening chest pain."
  },
  amoxicillin: {
    name: "Amoxicillin (Amoxil)",
    allergens: "High risk of allergic reactions if allergic to Penicillin.",
    foodInteraction: "Can be taken with or without food. Drink a full glass of water.",
    historyWarning: "Do not use if you have an established allergy to penicillin-type antibiotics."
  },
  amphetamine_salt: {
    name: "Amphetamine Salts (Adderall)",
    allergens: "Contains corn starch and various artificial color dyes depending on dose.",
    foodInteraction: "Avoid taking with fruit juices or Vitamin C, which can lower drug absorption.",
    historyWarning: "Avoid if you have advanced arteriosclerosis, symptomatic cardiovascular disease, or severe hypertension."
  },
  apixaban: {
    name: "Apixaban (Eliquis)",
    allergens: "Contains lactose and hypromellose.",
    foodInteraction: "Can be taken with or without food. Do not stop taking without consulting a physician.",
    historyWarning: "Severe risk of heavy bleeding. Avoid if you have active pathological bleeding or severe liver impairment."
  },
  aripiprazole: {
    name: "Aripiprazole (Abilify)",
    allergens: "Contains lactose monohydrate and corn starch.",
    foodInteraction: "Avoid alcohol. Can be taken with or without food.",
    historyWarning: "Increased risk of suicidal thoughts in children and young adults. Monitor behavior closely."
  },
  aspirin: {
    name: "Aspirin (Bayer)",
    allergens: "Gluten-Free. Free of major dyes.",
    foodInteraction: "Do not take on an empty stomach to avoid severe gastric bleeding.",
    historyWarning: "Avoid if you have bleeding disorders, stomach ulcers, or if treating viral symptoms in teenagers."
  },
  atenolol: {
    name: "Atenolol (Tenormin)",
    allergens: "Contains magnesium stearate and gelatin fractions.",
    foodInteraction: "Avoid sudden drops in salt/sodium intake. Take at the same time every day.",
    historyWarning: "Do not stop taking suddenly; doing so can trigger a heart attack or severe spikes in blood pressure."
  },
  atomoxetine: {
    name: "Atomoxetine (Strattera)",
    allergens: "Contains pregelatinized starch.",
    foodInteraction: "Can be taken with or without food, but taking with food minimizes stomach distress.",
    historyWarning: "Boxed warning for increased risk of suicidal ideation in pediatric patients."
  },
  atorvastatin: {
    name: "Atorvastatin (Lipitor)",
    allergens: "Contains lactose and calcium carbonate.",
    foodInteraction: "Avoid eating or drinking large quantities of grapefruit juice.",
    historyWarning: "Avoid if you have active liver disease or unexplained persistent elevations of liver enzymes."
  },
  azithromycin: {
    name: "Azithromycin (Zithromax / Z-Pak)",
    allergens: "Contains corn starch. Suspensions may contain sucrose.",
    foodInteraction: "Do not take aluminum or magnesium-containing antacids at the same time.",
    historyWarning: "Avoid if you have a history of cholestatic jaundice or liver dysfunction associated with prior use."
  },
  baclofen: {
    name: "Baclofen (Lioresal)",
    allergens: "Contains calcium phosphate and starch.",
    foodInteraction: "Avoid alcohol as it multiplies drowsiness and muscle weakness risks.",
    historyWarning: "Do not abruptly stop taking; withdrawal can cause severe hallucinations or seizures."
  },
  benazepril: {
    name: "Benazepril (Lotensin)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "Avoid high-potassium foods and potassium salt substitutes.",
    historyWarning: "Severe risk of injury if pregnant. Discontinue immediately if pregnancy occurs."
  },
  benzonatate: {
    name: "Benzonatate (Tessalon Perles)",
    allergens: "Contains gelatin capsules and parabens.",
    foodInteraction: "Must be swallowed whole. Never chew or break capsules.",
    historyWarning: "If swallowed broken, can cause rapid numbness of the throat and larynx, causing choking hazards."
  },
  brimonidine: {
    name: "Brimonidine (Alphagan)",
    allergens: "Eye drops contain benzalkonium chloride which can discolor soft contact lenses.",
    foodInteraction: "Avoid alcohol and central nervous system depressants.",
    historyWarning: "Use caution if you have severe cardiovascular disease or depression issues."
  },
  budesonide: {
    name: "Budesonide (Symbicort / Pulmicort)",
    allergens: "Inhaler form contains lactose milk proteins in the dry powder formula.",
    foodInteraction: "Avoid grapefruit juice as it increases systemic steroid levels.",
    historyWarning: "Rinse mouth thoroughly with water after use to prevent oral thrush infections."
  },
  bumetanide: {
    name: "Bumetanide (Bumex)",
    allergens: "Contains lactose. Cross-sensitivity possible if allergic to sulfa medications.",
    foodInteraction: "May lower potassium significantly. Take with potassium supplements if directed.",
    historyWarning: "Avoid if you are unable to urinate or suffer from severe hepatic coma."
  },
  bupropion: {
    name: "Bupropion (Wellbutrin)",
    allergens: "Contains hidden sulfites in some generic formulas.",
    foodInteraction: "Do not consume alcohol; increases the risk of seizures significantly.",
    historyWarning: "Strictly avoid if you have a seizure disorder, anorexia, or bulimia."
  },
  buspirone: {
    name: "Buspirone (Buspar)",
    allergens: "Contains lactose and sodium starch glycolate.",
    foodInteraction: "Avoid large amounts of grapefruit juice which spikes blood levels of the drug.",
    historyWarning: "Do not use within 14 days of taking an MAOI antidepressant."
  },
  canagliflozin: {
    name: "Canagliflozin (Invokana)",
    allergens: "Contains lactose anhydrous.",
    foodInteraction: "Take before the first meal of the day. Stay hydrated.",
    historyWarning: "Risk of lower limb amputations and necrotizing fasciitis of the perineum. Monitor feet daily."
  },
  carisoprodol: {
    name: "Carisoprodol (Soma)",
    allergens: "Contains starch and magnesium stearate.",
    foodInteraction: "Avoid alcohol and sedatives; combinations can dangerously depress lung function.",
    historyWarning: "High potential for dependency and abuse. Short-term use only."
  },
  carvedilol: {
    name: "Carvedilol (Coreg)",
    allergens: "Contains lactose and sucrose.",
    foodInteraction: "Should be taken with food to slow down absorption rates and decrease dizziness.",
    historyWarning: "Avoid if you have severe heart failure, asthma, or severe chronic obstructive pulmonary disease (COPD)."
  },
  cefdinir: {
    name: "Cefdinir (Omnicef)",
    allergens: "Suspension contains sucrose. Capsules contain lactose.",
    foodInteraction: "Do not take within 2 hours of iron supplements or antacids containing aluminum/magnesium.",
    historyWarning: "May cause stools to turn a harmless reddish color when taken with iron."
  },
  celecoxib: {
    name: "Celecoxib (Celebrex)",
    allergens: "Contains Sulfa compounds. Do not take if allergic to sulfonamides.",
    foodInteraction: "Can be taken with food to reduce stomach upset. Avoid taking with other NSAIDs.",
    historyWarning: "Increased risk of serious cardiovascular thrombotic events, myocardial infarction, and stroke."
  },
  cephalexin: {
    name: "Cephalexin (Keflex)",
    allergens: "Contains lactose and carboxymethylcellulose.",
    foodInteraction: "Can be taken with or without food. Complete the full course prescribed.",
    historyWarning: "Use caution if you have a severe allergy to penicillin; cross-sensitivity can occur."
  },
  cetirizine: {
    name: "Cetirizine (Zyrtec)",
    allergens: "Contains lactose monohydrate and corn starch.",
    foodInteraction: "Avoid alcohol. Can be taken with or without food.",
    historyWarning: "May cause significant drowsiness in sensitive patients despite being non-drowsy class."
  },
  cholecalciferol: {
    name: "Cholecalciferol (Vitamin D3)",
    allergens: "Some capsules contain soybean oil or corn oil. Gelcaps contain gelatin.",
    foodInteraction: "Best absorbed when taken with a meal containing fat.",
    historyWarning: "Avoid if you have hypercalcemia (excessive calcium levels in the blood)."
  },
  ciprofloxacin: {
    name: "Ciprofloxacin (Cipro)",
    allergens: "Contains microcrystalline cellulose and starch.",
    foodInteraction: "Avoid dairy products or calcium-fortified juices alone; blocks system absorption.",
    historyWarning: "Boxed warning for tendon rupture, tendonitis, and aortic aneurysm risks."
  },
  citalopram: {
    name: "Citalopram (Celexa)",
    allergens: "Contains lactose and copovidone.",
    foodInteraction: "Avoid alcohol. Watch for sudden changes in mood or behavior.",
    historyWarning: "May cause QT prolongation (heart rhythm changes). Avoid if you have congenital long QT syndrome."
  },
  clindamycin: {
    name: "Clindamycin (Cleocin)",
    allergens: "Capsules contain lactose. Topical forms may contain propylene glycol.",
    foodInteraction: "Can be taken with or without food. Drink a full glass of water to avoid throat irritation.",
    historyWarning: "Can cause severe, life-threatening diarrhea (C. diff infection). Consult a doctor if diarrhea develops."
  },
  clonazepam: {
    name: "Clonazepam (Klonopin)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Do not drink alcohol. Avoid activities requiring mental alertness after taking.",
    historyWarning: "Risk of dependency. Avoid if you have severe respiratory insufficiency or sleep apnea."
  },
  clonidine: {
    name: "Clonidine (Catapres)",
    allergens: "Transdermal patches contain aluminum backing elements. Remove before an MRI.",
    foodInteraction: "Avoid alcohol and driving until drowsiness side effects are understood.",
    historyWarning: "Never stop taking abruptly; doing so can cause a severe, life-threatening rebound spike in blood pressure."
  },
  clopidogrel: {
    name: "Clopidogrel (Plavix)",
    allergens: "Contains hydrogenated castor oil and lactose.",
    foodInteraction: "Avoid eating grapefruit or using PPIs like omeprazole without checking with a doctor.",
    historyWarning: "Avoid if you have active pathological bleeding, such as a peptic ulcer or intracranial hemorrhage."
  },
  colchicine: {
    name: "Colchicine (Colcrys)",
    allergens: "Contains lactose and pregelatinized starch.",
    foodInteraction: "Avoid grapefruit juice. Can be taken with or without food.",
    historyWarning: "Narrow therapeutic window; toxicity symptoms include severe diarrhea, vomiting, and muscle pain."
  },
  cyclobenzaprine: {
    name: "Cyclobenzaprine (Flexeril)",
    allergens: "Contains lactose and yellow dye #10 in some doses.",
    foodInteraction: "Avoid alcohol and other central nervous system depressants.",
    historyWarning: "Do not use if you are recovering from a recent heart attack or heart rhythm disorders."
  },
  dextroamphetamine: {
    name: "Dextroamphetamine (Dexedrine)",
    allergens: "Contains sucrose and tartrazine (FD&C Yellow No. 5).",
    foodInteraction: "Acidifying agents (like juices) lower absorption. Alkalizing agents (like baking soda) increase it.",
    historyWarning: "Avoid if you have a history of drug abuse, advanced cardiovascular disease, or hyperthyroidism."
  },
  diazepam: {
    name: "Diazepam (Valium)",
    allergens: "Contains corn starch and calcium stearate.",
    foodInteraction: "Avoid grapefruit juice and alcohol completely.",
    historyWarning: "Boxed warning for profound sedation, respiratory depression, coma, and death if mixed with opioids."
  },
  diclofenac: {
    name: "Diclofenac (Voltaren)",
    allergens: "Contains lactose. Topical gel contains isopropyl alcohol.",
    foodInteraction: "Avoid taking alongside other NSAIDs like ibuprofen or aspirin.",
    historyWarning: "Increases risk of stomach bleeding and ulcers. Avoid if you have active gastrointestinal bleeding."
  },
  digoxin: {
    name: "Digoxin (Lanoxin)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Avoid high-fiber meals immediately before or after taking as it drops absorption.",
    historyWarning: "Requires strict dosing monitor loops. High toxicity risks if kidney function declines."
  },
  diltiazem: {
    name: "Diltiazem (Cardizem)",
    allergens: "Contains lactose and castor oil fractions.",
    foodInteraction: "Do not consume grapefruit juice. Limit caffeine intake.",
    historyWarning: "Avoid if you have advanced heart block or very low blood pressure."
  },
  divalproex: {
    name: "Divalproex (Depakote)",
    allergens: "Contains vanillin flavoring and various color lakes.",
    foodInteraction: "Can be taken with food to reduce nausea. Avoid carbonated beverages.",
    historyWarning: "Can cause life-threatening liver damage and pancreatitis. Frequent lab tests required."
  },
  donepezil: {
    name: "Donepezil (Aricept)",
    allergens: "Contains lactose monohydrate and starch derivatives.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Can cause severe bradycardia (slow heart rate) and gastrointestinal bleeding."
  },
  doxazosin: {
    name: "Doxazosin (Cardura)",
    allergens: "Contains lactose and sodium starch glycolate.",
    foodInteraction: "Take initial doses at bedtime due to risk of fainting or severe dizziness.",
    historyWarning: "Can cause significant drop in blood pressure when standing up (orthostatic hypotension)."
  },
  doxycycline: {
    name: "Doxycycline (Vibramycin)",
    allergens: "Capsules contain gelatin and corn starch. Gluten-free.",
    foodInteraction: "Do not take with milk, dairy, or iron supplements; calcium binds the drug and stops absorption.",
    historyWarning: "Causes severe sun sensitivity. Can cause permanent teeth discoloration in children."
  },
  duloxetine: {
    name: "Duloxetine (Cymbalta)",
    allergens: "Contains sucrose and gelatin capsules.",
    foodInteraction: "Do not drink heavy amounts of alcohol due to a heightened risk of liver damage.",
    historyWarning: "Avoid if you have uncontrolled narrow-angle glaucoma or chronic liver disease."
  },
  empagliflozin: {
    name: "Empagliflozin (Jardiance)",
    allergens: "Contains lactose and magnesium stearate.",
    foodInteraction: "Maintain a steady fluid intake to prevent dehydration.",
    historyWarning: "Avoid if you are on dialysis or have severe kidney impairment."
  },
  enalapril: {
    name: "Enalapril (Vasotec)",
    allergens: "Contains lactose.",
    foodInteraction: "Avoid salt substitutes containing potassium without consulting your doctor.",
    historyWarning: "Discontinue immediately if pregnant. Can cause injury and death to the developing fetus."
  },
  enoxaparin: {
    name: "Enoxaparin (Lovenox)",
    allergens: "Derived from porcine (pig) intestinal mucosa.",
    foodInteraction: "Avoid herbal supplements that increase bleeding risk (gingko, garlic, ginseng).",
    historyWarning: "Boxed warning for spinal/epidural hematoma risk if undergoing spinal procedures."
  },
  escitalopram: {
    name: "Escitalopram (Lexapro)",
    allergens: "Contains talc and microcrystalline cellulose.",
    foodInteraction: "Avoid alcohol. Take at the same time every morning or evening.",
    historyWarning: "Monitor for suicidal thoughts, especially in young adults starting treatment."
  },
  esomeprazole: {
    name: "Esomeprazole (Nexium)",
    allergens: "Contains sucrose spheres and talc. Gluten-free.",
    foodInteraction: "Take at least 1 hour before a meal on an empty stomach.",
    historyWarning: "Chronic use may lower bone density and interfere with magnesium/vitamin B12 levels."
  },
  eszopiclone: {
    name: "Eszopiclone (Lunesta)",
    allergens: "Contains lactose and triacetin coatings.",
    foodInteraction: "Avoid taking with high-fat meals as it significantly delays drug onset.",
    historyWarning: "Risk of complex sleep behaviors (sleep-driving, cooking while asleep) with amnesia."
  },
  ezetimibe: {
    name: "Ezetimibe (Zetia)",
    allergens: "Contains lactose monohydrate and croscarmellose sodium.",
    foodInteraction: "Can be taken with or without food, at any time of day.",
    historyWarning: "Avoid if you have moderate to severe hepatic impairment or active liver disease."
  },
  famotidine: {
    name: "Famotidine (Pepcid)",
    allergens: "Contains starch and hydroxypropyl cellulose.",
    foodInteraction: "Avoid foods that trigger your acid reflux (spicy, greasy, citrus).",
    historyWarning: "Dose adjustment may be necessary if you have moderate to severe kidney disease."
  },
  fenofibrate: {
    name: "Fenofibrate (Tricor)",
    allergens: "Contains lactose monohydrate and soybean lecithin elements.",
    foodInteraction: "Formulations vary; some must be taken with meals to ensure bioavailability.",
    historyWarning: "Can cause severe myopathy or rhabdomyolysis, especially if combined with statins."
  },
  fentanyl: {
    name: "Fentanyl (Duragesic Patch)",
    allergens: "Transdermal adhesive matrices may contain polyacrylates.",
    foodInteraction: "Avoid applying external heat (heating pads, hot tubs) over patch; accelerates drug absorption.",
    historyWarning: "Black box warning for extreme respiratory depression and high potential for fatal overdose."
  },
  finasteride: {
    name: "Finasteride (Proscar / Propecia)",
    allergens: "Contains lactose and docusate sodium.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Women who are or may potentially be pregnant must not handle crushed or broken tablets."
  },
  fluconazole: {
    name: "Fluconazole (Diflucan)",
    allergens: "Contains lactose and aluminum lakes.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Associated with rare cases of serious hepatic toxicity. Monitor liver panel changes."
  },
  fluoxetine: {
    name: "Fluoxetine (Prozac)",
    allergens: "Contains gelatin and starch.",
    foodInteraction: "Avoid alcohol. Tryptophan supplements should be skipped.",
    historyWarning: "Risk of serotonin syndrome when mixed with other mood elevators."
  },
  fluticasone: {
    name: "Fluticasone (Flonase)",
    allergens: "Nasal sprays contain benzalkonium chloride preservative.",
    foodInteraction: "No major food interactions reported for nasal formulations.",
    historyWarning: "Monitor closely if you have a history of ocular herpes simplex or tuberculosis."
  },
  folic_acid: {
    name: "Folic Acid (Vitamin B9)",
    allergens: "Contains starch and calcium phosphate. Most formulas are lactose-free.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Ensure B12 deficiency is ruled out before high-dose therapy to prevent neurological masks."
  },
  furosemide: {
    name: "Furosemide (Lasix)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Can cause massive potassium loss. Eat potassium-rich foods (bananas) as recommended by your doctor.",
    historyWarning: "Avoid if you are unable to urinate (anuria) or are severely dehydrated."
  },
  gabapentin: {
    name: "Gabapentin (Neurontin)",
    allergens: "Capsules contain corn starch and gelatin.",
    foodInteraction: "Do not take within 2 hours of using an aluminum or magnesium-based antacid.",
    historyWarning: "Can cause severe breathing problems in individuals with pre-existing respiratory conditions."
  },
  glimepiride: {
    name: "Glimepiride (Amaryl)",
    allergens: "Contains lactose. Sulfa-derivative cross reactivity risk.",
    foodInteraction: "Take with breakfast or the first main meal of the day to protect blood glucose crash.",
    historyWarning: "High risk of severe hypoglycemia if meals are delayed or skipped entirely."
  },
  glipizide: {
    name: "Glipizide (Glucotrol)",
    allergens: "Contains starch and stearic acid.",
    foodInteraction: "Take 30 minutes before breakfast. Skipping meals can cause dangerous low blood sugar.",
    historyWarning: "Use caution if you have a history of severe G6PD deficiency (can cause anemia)."
  },
  glyburide: {
    name: "Glyburide (Diabeta)",
    allergens: "Contains micronized corn starch. Cross-reactivity risk for sulfa allergies.",
    foodInteraction: "Avoid alcohol (can trigger severe disulfiram-like vomiting reactions) and monitor for low blood sugar.",
    historyWarning: "High risk of prolonged hypoglycemia in elderly populations."
  },
  guaifenesin: {
    name: "Guaifenesin (Mucinex)",
    allergens: "Extended release tabs contain carbomer blocks. Liquids may contain high fructose corn syrup.",
    foodInteraction: "Drink a full glass of water with each dose to maximize thinning of mucus.",
    historyWarning: "Avoid use in chronic coughs caused by smoking or emphysema without a physician diagnosis."
  },
  hydralazine: {
    name: "Hydralazine (Apresoline)",
    allergens: "Contains starch and microcrystalline cellulose.",
    foodInteraction: "Take consistently either always with food or always without food.",
    historyWarning: "Can cause drug-induced lupus erythematosus. Report joint pain or fever immediately."
  },
  hydrochlorothiazide: {
    name: "Hydrochlorothiazide (Microzide)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "May increase blood sugar levels. Avoid excessive sun exposure (increases sunburn risk).",
    historyWarning: "Avoid if you have an allergy to sulfa-based medications or suffer from renal failure."
  },
  hydrocodone: {
    name: "Hydrocodone / Acetaminophen (Vicodin)",
    allergens: "Contains corn starch and magnesium stearate.",
    foodInteraction: "Avoid alcohol completely. Do not combine with other acetaminophen products.",
    historyWarning: "Extreme risk for dependency and respiratory depression. Boxed warning for severe liver risks."
  },
  hydroxychloroquine: {
    name: "Hydroxychloroquine (Plaquenil)",
    allergens: "Contains lactose and dibasic calcium phosphate.",
    foodInteraction: "Take with a meal or glass of milk to prevent gastrointestinal upset.",
    historyWarning: "Requires regular baseline ophthalmic exams due to long-term risk of retinal toxicity."
  },
  hydroxyzine: {
    name: "Hydroxyzine (Atarax / Vistaril)",
    allergens: "Contains lactose and gelatin capsules.",
    foodInteraction: "Avoid alcohol and sedatives due to compounding central nervous system depression.",
    historyWarning: "Avoid in patients with prolonged QT interval history or older adults sensitive to severe dry mouth."
  },
  ibuprofen: {
    name: "Ibuprofen (Advil / Motrin)",
    allergens: "Contains Lactose and Corn Starch.",
    foodInteraction: "Take with food or milk to prevent stomach irritation.",
    historyWarning: "Avoid if you have a history of stomach ulcers, kidney disease, or severe asthma."
  },
  indomethacin: {
    name: "Indomethacin (Indocin)",
    allergens: "Contains lactose and gelatin.",
    foodInteraction: "Always take with food, milk, or an antacid to prevent severe gastrointestinal irritation.",
    historyWarning: "Highest rate of gastrointestinal side effects among common NSAIDs. Avoid in ulcer history."
  },
  insulin_glargine: {
    name: "Insulin Glargine (Lantus)",
    allergens: "Formulated with zinc and m-cresol.",
    foodInteraction: "Alcohol can cause severe, unpredictable hypoglycemia. Monitor blood sugar carefully.",
    historyWarning: "Never share injection pens between individuals, even if the needle is changed."
  },
  irbesartan: {
    name: "Irbesartan (Avapro)",
    allergens: "Contains lactose monohydrate and croscarmellose sodium.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Black box warning for fetal toxicity if taken during pregnancy. Stop immediately if pregnant."
  },
  isosorbide_mononitrate: {
    name: "Isosorbide Mononitrate (Imdur)",
    allergens: "Contains lactose and hydroxypropyl cellulose.",
    foodInteraction: "Do not drink alcohol as it drops blood pressure drastically when paired.",
    historyWarning: "NEVER use alongside erectile dysfunction drugs (like sildenafil) due to risk of fatal blood pressure drops."
  },
  ketoconazole: {
    name: "Ketoconazole (Nizoral)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Requires stomach acid to absorb. Do not take with antacids or acid reducers.",
    historyWarning: "Oral tablets carry a boxed warning for severe hepatotoxicity and adrenal insufficiency."
  },
  latanoprost: {
    name: "Latanoprost (Xalatan)",
    allergens: "Contains benzalkonium chloride which can be absorbed by contact lenses.",
    foodInteraction: "No specific food interactions for ophthalmic drop form.",
    historyWarning: "Can cause permanent brown pigmentation changes to the iris color of the eye."
  },
  levetiracetam: {
    name: "Levetiracetam (Keppra)",
    allergens: "Contains corn starch and povidone matrices.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Monitor for significant behavioral changes, aggression, or suicidal ideation."
  },
  levocetirizine: {
    name: "Levocetirizine (Xxyzal)",
    allergens: "Contains lactose and magnesium stearate.",
    foodInteraction: "Avoid alcohol. Take in the evening as it causes drowsiness.",
    historyWarning: "Avoid if you have end-stage renal disease or are undergoing hemodialysis."
  },
  levothyroxine: {
    name: "Levothyroxine (Synthroid)",
    allergens: "Contains lactose and corn starch. Colorings vary by dosage strength.",
    foodInteraction: "Must take on an empty stomach with water 30-60 minutes before breakfast. Soybean, calcium, and coffee reduce absorption.",
    historyWarning: "Do not use for weight loss treatment. Caution in patients with cardiovascular disorders."
  },
  liraglutide: {
    name: "Liraglutide (Victoza / Saxenda)",
    allergens: "Disodium phosphate dihydrate formulation ingredients.",
    foodInteraction: "Slows gastric emptying; may alter the absorption rates of oral medications.",
    historyWarning: "Boxed warning for thyroid C-cell tumor risk. Contraindicated if history of MTC or MEN 2."
  },
  lisinopril: {
    name: "Lisinopril (Prinivil / Zestril)",
    allergens: "Gluten-Free. Free of common dyes.",
    foodInteraction: "Avoid high-potassium foods and potassium salt substitutes.",
    historyWarning: "Dangerous if pregnant. Stop immediately if you suspect pregnancy. Can cause severe swelling of the throat."
  },
  loratadine: {
    name: "Loratadine (Claritin)",
    allergens: "Contains lactose and corn starch. Orally disintegrating tabs contain mannitol.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Dose reduction necessary for individuals with severe liver or kidney impairment."
  },
  lorazepam: {
    name: "Lorazepam (Ativan)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "Avoid alcohol completely. Drowsiness side effect is significant.",
    historyWarning: "High addiction risk. Avoid in cases of acute narrow-angle glaucoma or respiratory depression."
  },
  losartan: {
    name: "Losartan (Cozaar)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "Do not use potassium substitutes without a doctor's advice.",
    historyWarning: "Black box warning for fetal toxicity. Do not use during pregnancy."
  },
  lovastatin: {
    name: "Lovastatin (Mevacor)",
    allergens: "Contains lactose and starch.",
    foodInteraction: "Must be taken with your evening meal to ensure proper body absorption dynamics.",
    historyWarning: "Avoid if you have active liver disease. Stop use if unexplained muscle pain occurs."
  },
  meclizine: {
    name: "Meclizine (Antivert)",
    allergens: "Contains lactose and starch.",
    foodInteraction: "Avoid alcohol. Causes significant drowsiness.",
    historyWarning: "Use with caution if you have asthma, glaucoma, or an enlarged prostate."
  },
  meloxicam: {
    name: "Meloxicam (Mobic)",
    allergens: "Contains lactose monohydrate.",
    foodInteraction: "Take with food to minimize gastrointestinal distress. Avoid mixing with aspirin.",
    historyWarning: "Increased risk of gastrointestinal bleeding, ulceration, and intestinal perforation."
  },
  metformin: {
    name: "Metformin (Glucophage)",
    allergens: "Free of major allergens, but extended-release tabs use specific polymers.",
    foodInteraction: "Avoid excessive alcohol intake to reduce the risk of a life-threatening lactic acid buildup.",
    historyWarning: "Avoid if you have severe kidney disease, advanced heart failure, or metabolic acidosis."
  },
  methocarbamol: {
    name: "Methocarbamol (Robaxin)",
    allergens: "Contains corn starch and sodium starch glycolate. Dyes vary by generic.",
    foodInteraction: "Avoid alcohol and sleeping aids; compounds sedative properties dangerously.",
    historyWarning: "May color urine a dark green, black, or blue hue. This is harmless but good to know."
  },
  methotrexate: {
    name: "Methotrexate (Rheumatrex)",
    allergens: "Contains lactose and starch.",
    foodInteraction: "Avoid alcohol completely due to high risks of immediate liver toxicity.",
    historyWarning: "High alert medication. Usually taken once a WEEK, not daily. Misuse can be fatal."
  },
  methylprednisolone: {
    name: "Methylprednisolone (Medrol)",
    allergens: "Contains lactose and sucrose.",
    foodInteraction: "Take with food or milk to prevent stomach upset. Avoid grapefruit juice.",
    historyWarning: "Can temporarily raise blood sugar levels. Avoid live vaccines during treatment."
  },
  metoclopramide: {
    name: "Metoclopramide (Reglan)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Take 30 minutes before meals and at bedtime.",
    historyWarning: "Can cause tardive dyskinesia (involuntary movements) if used long-term (over 12 weeks)."
  },
  metoprolol: {
    name: "Metoprolol (Toprol / Lopressor)",
    allergens: "Contains lactose and silicon dioxide.",
    foodInteraction: "Take with or immediately following a meal to ensure even absorption.",
    historyWarning: "Do not abruptly stop taking. Can lead to severe rebound hypertension or cardiac arrhythmias."
  },
  metronidazole: {
    name: "Metronidazole (Flagyl)",
    allergens: "Contains starch and stearic acid. Gluten-free.",
    foodInteraction: "STRICTLY AVOID ALCOHOL during therapy and for 3 days after. Causes violent vomiting, rapid heart rate, and throbbing headache.",
    historyWarning: "Avoid if you have a history of severe central nervous system disorders."
  },
  mirtazapine: {
    name: "Mirtazapine (Remeron)",
    allergens: "Contains lactose. Orally disintegrating tablets contain phenylalanine (aspartame).",
    foodInteraction: "Avoid alcohol. Usually taken at bedtime because it is highly sedating.",
    historyWarning: "Can cause an increase in appetite and significant weight gain."
  },
  montelukast: {
    name: "Montelukast (Singulair)",
    allergens: "Chewable tablets contain aspartame (phenylalanine). Use caution if you have PKU.",
    foodInteraction: "Can be taken with or without food. Take consistently every evening.",
    historyWarning: "Monitor for neuropsychiatric changes, including vivid dreams, depression, or suicidal behavior."
  },
  mupirocin: {
    name: "Mupirocin (Bactroban)",
    allergens: "Ointment base contains polyethylene glycol. Avoid on deep open wounds if sensitive.",
    foodInteraction: "No food interactions for this topical antibiotic.",
    historyWarning: "For external skin use only. Do not use in eyes or nasal membranes."
  },
  naproxen: {
    name: "Naproxen (Aleve / Naprosyn)",
    allergens: "Contains povidone and starch core structures.",
    foodInteraction: "Take with a full glass of water. Food delays but doesn't reduce total absorption.",
    historyWarning: "Avoid if you have a history of aspirin-induced asthma or recent bypass heart surgery."
  },
  nifedipine: {
    name: "Nifedipine (Procardia)",
    allergens: "Capsules contain gelatin. Extended-release tabs contain cellulose coat matrix.",
    foodInteraction: "Absolutely avoid grapefruit juice; can drop blood pressure to dangerous levels.",
    historyWarning: "Do not crush, chew, or divide extended-release tablets."
  },
  nitrofurantoin: {
    name: "Nitrofurantoin (Macrobid)",
    allergens: "Contains lactose and corn starch.",
    foodInteraction: "Must take with food or milk to enhance absorption and reduce stomach upset.",
    historyWarning: "Avoid if you have significant renal impairment (low creatinine clearance)."
  },
  nitroglycerin: {
    name: "Nitroglycerin (Nitrostat)",
    allergens: "Sublingual tablets contain lactose and starch. Dye-free.",
    foodInteraction: "Do not take with alcohol.",
    historyWarning: "NEVER take with erectile dysfunction medications (Viagra/Cialis); causes a lethal drop in blood pressure."
  },
  olanzapine: {
    name: "Olanzapine (Zyprexa)",
    allergens: "Contains lactose. Disintegrating tablets contain aspartame.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "High risk of causing metabolic syndrome, weight gain, and elevated blood sugars."
  },
  olmesartan: {
    name: "Olmesartan (Benicar)",
    allergens: "Contains lactose monohydrate.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Can cause sprue-like enteropathy (severe chronic diarrhea with substantial weight loss) months to years after starting."
  },
  omeprazole: {
    name: "Omeprazole (Prilosec)",
    allergens: "Contains lactose and sodium lauryl sulfate.",
    foodInteraction: "Take on an empty stomach, at least 30 to 60 minutes before breakfast.",
    historyWarning: "Long-term use can cause low magnesium levels and increase the risk of bone fractures."
  },
  ondansetron: {
    name: "Ondansetron (Zofran)",
    allergens: "Orally disintegrating tabs contain gelatin and aspartame (phenylalanine).",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Can prolong the QT interval. Caution in patients with electrolyte imbalances."
  },
  oxycodone: {
    name: "Oxycodone (OxyContin)",
    allergens: "Contains lactose and various color additives depending on dosage.",
    foodInteraction: "Do not consume grapefruit products. Avoid alcohol entirely.",
    historyWarning: "High risk for addiction, abuse, and misuse. Serious risk of fatal respiratory depression."
  },
  pantoprazole: {
    name: "Pantoprazole (Protonix)",
    allergens: "Contains lactose and calcium stearate.",
    foodInteraction: "Take 30 minutes before the first meal of the day. Swallow tablets whole.",
    historyWarning: "Long term use can decrease Vitamin B12 absorption significantly."
  },
  paroxetine: {
    name: "Paroxetine (Paxil)",
    allergens: "Contains lactose and sodium starch glycolate.",
    foodInteraction: "Take in the morning with food to reduce risk of stomach upset.",
    historyWarning: "Highest discontinuation syndrome risk among SSRIs. Do not stop taking abruptly."
  },
  pioglitazone: {
    name: "Pioglitazone (Actos)",
    allergens: "Contains lactose monohydrate and carboxymethylcellulose.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Boxed warning: Can cause or exacerbate congestive heart failure in certain patients."
  },
  potassium_chloride: {
    name: "Potassium Chloride (K-Dur / K-Tab)",
    allergens: "Contains ethylcellulose matrices. Free of major common allergens.",
    foodInteraction: "Take with meals and a full glass of water to minimize throat/stomach irritation.",
    historyWarning: "Avoid if you have hyperkalemia (high blood potassium) or severe kidney disease."
  },
  pramipexole: {
    name: "Pramipexole (Mirapex)",
    allergens: "Contains mannitol and corn starch.",
    foodInteraction: "Can be taken with food if nausea occurs.",
    historyWarning: "Can cause sudden sleep attacks during daily activities, alongside compulsive gambling or hypersexuality behaviors."
  },
  pravastatin: {
    name: "Pravastatin (Pravachol)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "Can be taken with or without food, at any time of day. Avoid excessive alcohol.",
    historyWarning: "Avoid if you have active liver disease or unexplained persistent elevations of liver enzymes."
  },
  prednisone: {
    name: "Prednisone (Deltasone)",
    allergens: "Contains lactose and calcium stearate.",
    foodInteraction: "Always take with food or milk to reduce stomach lining erosion.",
    historyWarning: "Long-term usage requires tapering down slow loops; abrupt withdrawal can cause acute adrenal crisis."
  },
  pregabalin: {
    name: "Pregabalin (Lyrica)",
    allergens: "Contains lactose monohydrate.",
    foodInteraction: "Avoid alcohol due to combined profound somnolence risks.",
    historyWarning: "Discontinue gradually over at least 1 week to avoid increased seizure frequencies."
  },
  quetiapine: {
    name: "Quetiapine (Seroquel)",
    allergens: "Contains lactose and dibasic dicalcium phosphate.",
    foodInteraction: "Avoid grapefruit juice. Do not consume alcohol.",
    historyWarning: "Can significantly increase suicidal thoughts in young demographics. May alter metabolic lipid levels panels."
  },
  ramipril: {
    name: "Ramipril (Altace)",
    allergens: "Contains starch and gelatin shell capsules.",
    foodInteraction: "Avoid high-potassium foods and salt substitutes.",
    historyWarning: "Discontinue immediately if pregnancy is detected due to fatal risks to the fetus."
  },
  ranitidine: {
    name: "Ranitidine (Zantac)",
    allergens: "Formulations vary; historical configurations monitored for nitrosamine impurities.",
    foodInteraction: "Avoid known acidic dietary triggers.",
    historyWarning: "Use cautiously if history of porphyria exists; can precipitate acute porphyria attacks."
  },
  risperidone: {
    name: "Risperidone (Risperdal)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "Avoid alcohol. Can be taken with or without food.",
    historyWarning: "Boxed warning for increased mortality in elderly patients with dementia-related psychosis."
  },
  rivaroxaban: {
    name: "Rivaroxaban (Xarelto)",
    allergens: "Contains lactose monohydrate and croscarmellose sodium.",
    foodInteraction: "Doses of 15mg or 20mg MUST be taken with food to ensure proper absorption.",
    historyWarning: "Premature discontinuation increases thrombotic stroke risks. High bleeding risks."
  },
  rosuvastatin: {
    name: "Rosuvastatin (Crestor)",
    allergens: "Contains lactose monohydrate and triacetin.",
    foodInteraction: "Can be taken with or without food. Avoid antacids within 2 hours of taking.",
    historyWarning: "Slightly higher risk of muscle damage (myopathy) in patients of Asian descent; manage dosages carefully."
  },
  semaglutide: {
    name: "Semaglutide (Ozempic / Wegovy)",
    allergens: "Contains disodium phosphate dihydrate.",
    foodInteraction: "Oral form (Rybelsus) must be taken 30 mins before first food/drink with 4oz plain water.",
    historyWarning: "Boxed warning for thyroid C-cell tumors. Contact doctor immediately if throat mass develops."
  },
  sertraline: {
    name: "Sertraline (Zoloft)",
    allergens: "Contains dibasic calcium phosphate anhydrous.",
    foodInteraction: "Oral concentrate solution MUST be diluted with water, ginger ale, or orange juice immediately before taking.",
    historyWarning: "Monitor for serotonin syndrome and emergence of suicidal tendencies in adolescents."
  },
  sildenafil: {
    name: "Sildenafil (Viagra / Revatio)",
    allergens: "Contains lactose and croscarmellose sodium.",
    foodInteraction: "High-fat meals can delay the onset of action speed.",
    historyWarning: "NEVER use with organic nitrates (nitroglycerin) due to life-threatening hypotension risks."
  },
  simvastatin: {
    name: "Simvastatin (Zocor)",
    allergens: "Contains lactose monohydrate and starch core complexes.",
    foodInteraction: "Avoid grapefruit juice completely. Take strictly in the evening.",
    historyWarning: "High interactions matrix with amiodarone or diltiazem, raising risk of muscle damage."
  },
  sitagliptin: {
    name: "Sitagliptin (Januvia)",
    allergens: "Contains anhydrous dibasic calcium phosphate.",
    foodInteraction: "Can be taken with or without food.",
    historyWarning: "Monitor for severe, disabling joint pain or acute, life-threatening pancreatitis signs."
  },
  spironolactone: {
    name: "Spironolactone (Aldactone)",
    allergens: "Contains calcium sulfate and corn starch.",
    foodInteraction: "Take with food to increase absorption. Strictly avoid potassium supplements.",
    historyWarning: "Can cause hyperkalemia (lethal high blood potassium levels). May cause gynecomastia."
  },
  sumatriptan: {
    name: "Sumatriptan (Imitrex)",
    allergens: "Contains lactose and microcrystalline cellulose.",
    foodInteraction: "No direct food links, but do not take within 24 hours of other triptan headache medications.",
    historyWarning: "Contraindicated in patients with ischemic coronary artery disease or uncontrolled hypertension."
  },
  tadalafil: {
    name: "Tadalafil (Cialis)",
    allergens: "Contains lactose monohydrate.",
    foodInteraction: "Avoid excessive alcohol use, which can compound orthostatic hypotension risks.",
    historyWarning: "Contraindicated with concurrent nitrate therapy. Seek immediate care for erections lasting over 4 hours."
  },
  tamsulosin: {
    name: "Tamsulosin (Flomax)",
    allergens: "Contains calcium stearate and methacrylic acid copolymer.",
    foodInteraction: "Take 30 minutes following the same meal every day.",
    historyWarning: "Can cause intraoperative floppy iris syndrome during cataract surgeries. Inform eye surgeons."
  },
  terazosin: {
    name: "Terazosin (Hytrin)",
    allergens: "Contains lactose and chemical dye lakes.",
    foodInteraction: "Take first dose at bedtime due to profound potential for syncope (passing out).",
    historyWarning: "Risk of severe orthostatic hypotension and dizziness when standing up."
  },
  timolol: {
    name: "Timolol (Timoptic)",
    allergens: "Ophthalmic solutions contain benzalkonium chloride preservatives.",
    foodInteraction: "No major food links for eye drop formulations.",
    historyWarning: "Systemic absorption occurs; contraindicated in severe asthma, COPD, or sinus bradycardia."
  },
  tizanidine: {
    name: "Tizanidine (Zanaflex)",
    allergens: "Contains lactose anhydrous and starch components.",
    foodInteraction: "Switching between taking with food vs empty stomach alters absorption profiles significantly.",
    historyWarning: "Can cause severe low blood pressure, bradycardia, and significant liver enzyme elevations."
  },
  topiramate: {
    name: "Topiramate (Topamax)",
    allergens: "Contains lactose monohydrate and starch glycolate.",
    foodInteraction: "Drink extensive fluids to reduce risk of developing painful kidney stones.",
    historyWarning: "Can cause acute narrow-angle glaucoma and metabolic acidosis. Decreases sweating efficiency."
  },
  tramadol: {
    name: "Tramadol (Ultram)",
    allergens: "Contains lactose and sodium starch glycolate.",
    foodInteraction: "Avoid alcohol. Food does not significantly affect absorption profile kinetics.",
    historyWarning: "Boxed warning for addiction, respiratory depression, and seizure risks if threshold exceeded."
  },
  trazodone: {
    name: "Trazodone (Desyrel)",
    allergens: "Contains corn starch and dibasic calcium phosphate.",
    foodInteraction: "Should be taken immediately after a meal or light snack to decrease lightheadedness.",
    historyWarning: "Associated with priapism (painful prolonged erections); requires immediate emergency medical care."
  },
  triamterene: {
    name: "Triamterene (Dyrenium)",
    allergens: "Contains lactose, gelatin, and benzyl alcohol fractions.",
    foodInteraction: "Take after meals to mitigate stomach upset. Avoid potassium-rich diets.",
    historyWarning: "Can cause dangerous hyperkalemia. Use with extreme caution if renal impairments exist."
  },
  valacyclovir: {
    name: "Valacyclovir (Valtrex)",
    allergens: "Contains microcrystalline cellulose and povidone matrices.",
    foodInteraction: "Can be taken with or without food. Maintain high hydration index metrics.",
    historyWarning: "Can cause thrombotic thrombocytopenic purpura in immunocompromised individuals."
  },
  valsartan: {
    name: "Valsartan (Diovan)",
    allergens: "Contains microcrystalline cellulose and gelatin fractions.",
    foodInteraction: "Avoid salt substitutes that use potassium chemistry structures.",
    historyWarning: "Fetal toxicity boxed warning. Stop usage immediately if pregnancy occurs."
  },
  venlafaxine: {
    name: "Venlafaxine (Effexor)",
    allergens: "Extended release capsules use specific ethylcellulose barriers.",
    foodInteraction: "Must be taken with food at roughly the same time daily.",
    historyWarning: "Can cause sustained blood pressure elevations. Severe discontinuation syndrome risks."
  },
  verapamil: {
    name: "Verapamil (Calan)",
    allergens: "Contains corn starch and lactose elements.",
    foodInteraction: "Strictly avoid grapefruit juice consumption; dramatically elevates active drug quantities.",
    historyWarning: "Contraindicated in severe left ventricular dysfunction or advanced second/third-degree AV blocks."
  },
  warfarin: {
    name: "Warfarin (Coumadin)",
    allergens: "Contains lactose and color lakes matched to strength profiles.",
    foodInteraction: "Maintain a strict, consistent intake baseline of Vitamin K foods (green leafy veggies); spikes or drops break therapy efficacy.",
    historyWarning: "Narrow therapeutic index. High risk of life-threatening bleeding. Continuous INR monitoring is mandatory."
  }
};

// ==========================================
// 2. INTERACTIVE INTERFACE LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic welcome background for floating emojis
  document.body.classList.add("bg-welcome");
  
  // Interface Component Selectors
  const welcomeScreen = document.getElementById("welcome-screen");
  const selectionScreen = document.getElementById("selection-screen");
  const reportScreen = document.getElementById("report-screen");
  
  const startBtn = document.getElementById("start-btn");
  const backToWelcomeBtn = document.getElementById("back-to-welcome");
  const backToSelectBtn = document.getElementById("back-to-select");
  
  const medSelect = document.getElementById("med-select");
  const dashboard = document.getElementById("dashboard");

  // A. Populating Select Options Loop Array
  for (const key in medicineData) {
    if (medicineData.hasOwnProperty(key)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = medicineData[key].name;
      medSelect.appendChild(option);
    }
  }

  // B. Unified Interface Layout View Manager
  function switchScreen(activeScreen) {
    welcomeScreen.classList.remove("active");
    selectionScreen.classList.remove("active");
    reportScreen.classList.remove("active");
    
    activeScreen.classList.add("active");

    // Dynamic state background shifts for floating emoji elements
    document.body.classList.remove("bg-welcome", "bg-selection", "bg-report");
    if (activeScreen === welcomeScreen) document.body.classList.add("bg-welcome");
    if (activeScreen === selectionScreen) document.body.classList.add("bg-selection");
    if (activeScreen === reportScreen) document.body.classList.add("bg-report");
  }

  // C. Interactive Event Listeners Click Blocks
  startBtn.addEventListener("click", () => {
    switchScreen(selectionScreen);
  });

  backToWelcomeBtn.addEventListener("click", () => {
    switchScreen(welcomeScreen);
    medSelect.value = ""; 
  });

  backToSelectBtn.addEventListener("click", () => {
    switchScreen(selectionScreen);
    medSelect.value = ""; 
  });

  // D. Select Database Change Target Evaluation
  medSelect.addEventListener("change", (e) => {
    const selectedKey = e.target.value;
    const med = medicineData[selectedKey];

    if (med) {
      dashboard.innerHTML = `
        <div class="report-header">
          <h2>${med.name}</h2>
        </div>
        <div class="report-body">
          <div class="report-section alert-allergens">
            <h3>⚠️ Allergen Alerts</h3>
            <p>${med.allergens}</p>
          </div>
          <div class="report-section alert-food">
            <h3>🍔 Food & Lifestyle Interactions</h3>
            <p>${med.foodInteraction}</p>
          </div>
          <div class="report-section alert-history">
            <h3>📋 Critical Medical History Warnings</h3>
            <p>${med.historyWarning}</p>
          </div>
        </div>
      `;
      switchScreen(reportScreen);
    }
  });
});

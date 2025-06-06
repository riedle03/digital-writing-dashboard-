// Tool data
const toolsData = [
  {
    "도구명": "자작자작",
    "카테고리": "AI 글쓰기",
    "주요 기능": "AI 피드백, 디지털북 생성, 글감 추천",
    "가격": "교육기관 할인",
    "대상": "초중고",
    "특징": "30만건 작문데이터 기반, 교사 업무 90% 해결",
    "활용도": 5,
    "난이도": 2,
    "URL": "https://www.jajakjajak.com"
  },
  {
    "도구명": "뤼튼트레이닝",
    "카테고리": "AI 글쓰기",
    "주요 기능": "글쓰기 훈련, AI 가이드, 구조화된 작문",
    "가격": "무료/유료",
    "대상": "전체",
    "특징": "HyperCLOVA 기반, 한국어 특화",
    "활용도": 4,
    "난이도": 2,
    "URL": "https://training.wrtn.ai"
  },
  {
    "도구명": "구글 문서",
    "카테고리": "협업 도구",
    "주요 기능": "실시간 공동편집, 클라우드 저장",
    "가격": "무료",
    "대상": "전체",
    "특징": "가장 널리 사용되는 협업 도구",
    "활용도": 5,
    "난이도": 1,
    "URL": "https://docs.google.com"
  },
  {
    "도구명": "브리스크 티칭",
    "카테고리": "AI 교육도구",
    "주요 기능": "30개 이상 AI 도구, 크롬 확장프로그램",
    "가격": "무료/유료",
    "대상": "교사",
    "특징": "교사를 위한 올인원 AI 도구",
    "활용도": 4,
    "난이도": 3,
    "URL": "https://www.briskteaching.com/ko"
  },
  {
    "도구명": "심스페이스",
    "카테고리": "감정관리",
    "주요 기능": "AI 감정분석, 마음일기, 스트레스 관리",
    "가격": "무료",
    "대상": "초중고생",
    "특징": "학생 마음챙김, 감정 시각화",
    "활용도": 3,
    "난이도": 1,
    "URL": "https://diary.seamspace.me"
  },
  {
    "도구명": "레드멘타",
    "카테고리": "AI 교육도구",
    "주요 기능": "AI 워크시트 생성, 3초 만에 문제지 제작",
    "가격": "교육기관 할인",
    "대상": "교사",
    "특징": "130만 교사 신뢰, BETT 2025 혁신상",
    "활용도": 5,
    "난이도": 2,
    "URL": "https://redmenta.com/ko"
  },
  {
    "도구명": "패들렛",
    "카테고리": "협업 도구",
    "주요 기능": "온라인 협업게시판, 실시간 공유",
    "가격": "무료(3개)/유료",
    "대상": "전체",
    "특징": "간편한 온라인 포스트잇",
    "활용도": 5,
    "난이도": 1,
    "URL": "https://padlet.com"
  },
  {
    "도구명": "클로바노트",
    "카테고리": "음성인식",
    "주요 기능": "음성→텍스트 변환, AI 요약",
    "가격": "무료(600분)",
    "대상": "전체",
    "특징": "네이버 AI 음성인식, 95% 정확도",
    "활용도": 4,
    "난이도": 1,
    "URL": "https://clovanote.naver.com"
  },
  {
    "도구명": "구글 설문지",
    "카테고리": "설문/평가",
    "주요 기능": "온라인 설문, 퀴즈, 자동채점",
    "가격": "무료",
    "대상": "전체",
    "특징": "구글 생태계 연동",
    "활용도": 5,
    "난이도": 1,
    "URL": "https://docs.google.com/forms"
  },
  {
    "도구명": "캔바",
    "카테고리": "디자인",
    "주요 기능": "디자인 도구, AI 이미지 생성",
    "가격": "교육기관 무료",
    "대상": "전체",
    "특징": "교육기관 무료, AI 기능 포함",
    "활용도": 5,
    "난이도": 2,
    "URL": "https://www.canva.com/ko_kr"
  },
  {
    "도구명": "아트봉봉스쿨",
    "카테고리": "미술교육",
    "주요 기능": "AI 드로잉, 디지털 미술, 포토 스케치",
    "가격": "학교 허가 필요",
    "대상": "초중고",
    "특징": "수채화/유화 브러시, AI 심리검사",
    "활용도": 3,
    "난이도": 2,
    "URL": "https://school-teacher.art-bonbon.com"
  },
  {
    "도구명": "챗GPT",
    "카테고리": "AI 어시스턴트",
    "주요 기능": "대화형 AI, 글쓰기 브레인스토밍",
    "가격": "무료/유료",
    "대상": "전체",
    "특징": "가장 널리 사용되는 AI",
    "활용도": 5,
    "난이도": 2,
    "URL": "https://chatgpt.com"
  },
  {
    "도구명": "제미나이",
    "카테고리": "AI 어시스턴트",
    "주요 기능": "멀티모달 AI, 텍스트/이미지/영상 생성",
    "가격": "무료/유료",
    "대상": "전체",
    "특징": "구글 생태계, 멀티모달",
    "활용도": 4,
    "난이도": 3,
    "URL": "https://gemini.google.com"
  },
  {
    "도구명": "퍼플렉시티",
    "카테고리": "AI 검색",
    "주요 기능": "출처 기반 실시간 검색, 신뢰성 높은 정보",
    "가격": "무료/유료",
    "대상": "전체",
    "특징": "출처 명시, 실시간 정보",
    "활용도": 4,
    "난이도": 3,
    "URL": "https://www.perplexity.ai"
  }
];

// Global state
let filteredTools = [...toolsData];
let selectedTools = new Set();
let categoryChart = null;
let scatterChart = null;

// Category mapping for CSS classes
const categoryClassMap = {
  'AI 글쓰기': 'category-ai-writing',
  '협업 도구': 'category-collaboration',
  'AI 교육도구': 'category-ai-education',
  'AI 어시스턴트': 'category-ai-assistant',
  '감정관리': 'category-emotion',
  '음성인식': 'category-speech',
  '설문/평가': 'category-survey',
  '디자인': 'category-design',
  '미술교육': 'category-art',
  'AI 검색': 'category-search'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

function initializeApp() {
  updateStats();
  createCharts();
  renderTools();
}

function updateStats() {
  const totalTools = toolsData.length;
  const categories = [...new Set(toolsData.map(tool => tool.카테고리))];
  const totalCategories = categories.length;

  document.getElementById('totalTools').textContent = totalTools;
  document.getElementById('totalCategories').textContent = totalCategories;
}

function createCharts() {
  createCategoryChart();
  createScatterChart();
}

function createCategoryChart() {
  const ctx = document.getElementById('categoryChart').getContext('2d');
  const categories = {};
  
  toolsData.forEach(tool => {
    categories[tool.카테고리] = (categories[tool.카테고리] || 0) + 1;
  });

  const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

  categoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(categories),
      datasets: [{
        data: Object.values(categories),
        backgroundColor: chartColors.slice(0, Object.keys(categories).length),
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        }
      }
    }
  });
}

function createScatterChart() {
  const ctx = document.getElementById('scatterChart').getContext('2d');
  
  const scatterData = toolsData.map(tool => ({
    x: tool.활용도,
    y: tool.난이도,
    label: tool.도구명
  }));

  scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: '도구별 활용도 vs 난이도',
        data: scatterData,
        backgroundColor: '#1FB8CD',
        borderColor: '#1FB8CD',
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: '활용도'
          },
          min: 0,
          max: 6
        },
        y: {
          title: {
            display: true,
            text: '난이도'
          },
          min: 0,
          max: 4
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.raw.label}: 활용도 ${context.raw.x}, 난이도 ${context.raw.y}`;
            }
          }
        },
        legend: {
          display: false
        }
      }
    }
  });
}

function setupEventListeners() {
  // Search functionality
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  
  // Category filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', handleCategoryFilter);
  });
  
  // Sort functionality
  document.getElementById('sortSelect').addEventListener('change', handleSort);
  
  // Compare functionality
  document.getElementById('compareBtn').addEventListener('click', openCompareModal);
  document.getElementById('clearSelection').addEventListener('click', clearSelection);
  
  // Modal controls
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeCompareModal').addEventListener('click', closeCompareModal);
  
  // Click outside modal to close
  document.getElementById('toolModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  
  document.getElementById('compareModal').addEventListener('click', function(e) {
    if (e.target === this) closeCompareModal();
  });
}

function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  filterTools(searchTerm);
}

function handleCategoryFilter(e) {
  const category = e.target.dataset.category;
  
  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  
  // Filter tools
  if (category === '전체') {
    filteredTools = [...toolsData];
  } else {
    filteredTools = toolsData.filter(tool => tool.카테고리 === category);
  }
  
  renderTools();
}

function handleSort(e) {
  const sortType = e.target.value;
  
  switch (sortType) {
    case 'activity-high':
      filteredTools.sort((a, b) => b.활용도 - a.활용도);
      break;
    case 'activity-low':
      filteredTools.sort((a, b) => a.활용도 - b.활용도);
      break;
    case 'difficulty-easy':
      filteredTools.sort((a, b) => a.난이도 - b.난이도);
      break;
    case 'difficulty-hard':
      filteredTools.sort((a, b) => b.난이도 - a.난이도);
      break;
    default:
      filteredTools = [...toolsData];
  }
  
  renderTools();
}

function filterTools(searchTerm = '') {
  const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
  
  filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.도구명.toLowerCase().includes(searchTerm) ||
                         tool.주요기능?.toLowerCase().includes(searchTerm) ||
                         tool.특징?.toLowerCase().includes(searchTerm);
    
    const matchesCategory = activeCategory === '전체' || tool.카테고리 === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  renderTools();
}

function renderTools() {
  const toolsGrid = document.getElementById('toolsGrid');
  
  if (filteredTools.length === 0) {
    toolsGrid.innerHTML = `
      <div class="empty-state">
        <h3>검색 결과가 없습니다</h3>
        <p>다른 키워드로 검색해보세요.</p>
      </div>
    `;
    return;
  }
  
  toolsGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
  
  // Add event listeners to new cards
  toolsGrid.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.type !== 'checkbox') {
        openToolModal(card.dataset.toolName);
      }
    });
  });
  
  toolsGrid.querySelectorAll('.tool-card__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', handleToolSelection);
  });
}

function createToolCard(tool) {
  const categoryClass = categoryClassMap[tool.카테고리] || '';
  const stars = '★'.repeat(tool.활용도) + '☆'.repeat(5 - tool.활용도);
  const difficultyDots = Array.from({length: 3}, (_, i) => 
    `<span class="difficulty-dot ${i < tool.난이도 ? 'active' : ''}"></span>`
  ).join('');

  return `
    <div class="tool-card" data-tool-name="${tool.도구명}" tabindex="0">
      <div class="tool-card__header">
        <h3 class="tool-card__title">${tool.도구명}</h3>
        <input type="checkbox" class="tool-card__checkbox" data-tool-name="${tool.도구명}">
      </div>
      
      <div class="tool-card__category ${categoryClass}">
        ${tool.카테고리}
      </div>
      
      <p class="tool-card__description korean-text">
        ${tool.주요기능 || tool['주요 기능']}
      </p>
      
      <div class="tool-card__meta">
        <div class="tool-card__rating">
          <span class="stars">${stars}</span>
          <span>${tool.활용도}/5</span>
        </div>
        <div class="tool-card__difficulty">
          <div class="difficulty-dots">${difficultyDots}</div>
          <span>난이도 ${tool.난이도}</span>
        </div>
      </div>
      
      <div class="tool-card__info">
        <div><strong>가격:</strong> ${tool.가격}</div>
        <div><strong>대상:</strong> ${tool.대상}</div>
        <div class="korean-text"><strong>특징:</strong> ${tool.특징}</div>
      </div>
      
      <div class="tool-card__actions">
        <a href="${tool.URL}" target="_blank" class="btn btn--primary btn--sm">웹사이트 방문</a>
      </div>
    </div>
  `;
}

function handleToolSelection(e) {
  const toolName = e.target.dataset.toolName;
  
  if (e.target.checked) {
    selectedTools.add(toolName);
  } else {
    selectedTools.delete(toolName);
  }
  
  updateCompareButton();
}

function updateCompareButton() {
  const compareBtn = document.getElementById('compareBtn');
  const selectedCount = document.getElementById('selectedCount');
  
  selectedCount.textContent = selectedTools.size;
  compareBtn.disabled = selectedTools.size < 2;
}

function clearSelection() {
  selectedTools.clear();
  document.querySelectorAll('.tool-card__checkbox').forEach(checkbox => {
    checkbox.checked = false;
  });
  updateCompareButton();
}

function openToolModal(toolName) {
  const tool = toolsData.find(t => t.도구명 === toolName);
  if (!tool) return;
  
  const modal = document.getElementById('toolModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = tool.도구명;
  modalBody.innerHTML = createToolModalContent(tool);
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function createToolModalContent(tool) {
  const categoryClass = categoryClassMap[tool.카테고리] || '';
  const stars = '★'.repeat(tool.활용도) + '☆'.repeat(5 - tool.활용도);
  
  return `
    <div class="modal-detail__category ${categoryClass}">
      ${tool.카테고리}
    </div>
    
    <div class="modal-detail__meta">
      <div class="modal-detail__meta-item">
        <span class="modal-detail__meta-label">활용도</span>
        <div class="modal-detail__meta-value">
          <span class="stars">${stars}</span>
          <div>${tool.활용도}/5</div>
        </div>
      </div>
      <div class="modal-detail__meta-item">
        <span class="modal-detail__meta-label">난이도</span>
        <div class="modal-detail__meta-value">${tool.난이도}/3</div>
      </div>
      <div class="modal-detail__meta-item">
        <span class="modal-detail__meta-label">가격</span>
        <div class="modal-detail__meta-value">${tool.가격}</div>
      </div>
      <div class="modal-detail__meta-item">
        <span class="modal-detail__meta-label">대상</span>
        <div class="modal-detail__meta-value">${tool.대상}</div>
      </div>
    </div>
    
    <div class="modal-detail__section">
      <h4>주요 기능</h4>
      <p class="korean-text">${tool.주요기능 || tool['주요 기능']}</p>
    </div>
    
    <div class="modal-detail__section">
      <h4>특징</h4>
      <p class="korean-text">${tool.특징}</p>
    </div>
    
    <div class="modal-detail__section">
      <h4>교육 활용 예시</h4>
      <ul>
        ${getEducationExamples(tool.카테고리).map(example => `<li class="korean-text">${example}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-detail__section">
      <a href="${tool.URL}" target="_blank" class="btn btn--primary">웹사이트 방문</a>
    </div>
  `;
}

function getEducationExamples(category) {
  const examples = {
    'AI 글쓰기': [
      '학생 작문 첨삭 및 피드백 제공',
      '창의적 글쓰기 아이디어 발굴',
      '맞춤형 글쓰기 과제 생성'
    ],
    '협업 도구': [
      '학생들과의 실시간 프로젝트 협업',
      '과제 공유 및 피드백 수집',
      '온라인 토론 및 브레인스토밍'
    ],
    'AI 교육도구': [
      '개별 학습자 맞춤 문제 생성',
      '학습 진도 자동 추적',
      '다양한 교육 콘텐츠 제작'
    ],
    'AI 어시스턴트': [
      '수업 계획서 작성 도움',
      '학생 질문 답변 지원',
      '교육 자료 검색 및 정리'
    ],
    '감정관리': [
      '학생 심리 상태 모니터링',
      '스트레스 관리 교육',
      '정서적 지원 프로그램 운영'
    ],
    '음성인식': [
      '수업 내용 자동 기록',
      '발표 연습 및 피드백',
      '언어 학습 발음 교정'
    ],
    '설문/평가': [
      '학습 성과 평가',
      '수업 만족도 조사',
      '개별 학습 진단'
    ],
    '디자인': [
      '교육 자료 시각화',
      '학생 포트폴리오 제작',
      '프레젠테이션 디자인'
    ],
    '미술교육': [
      '디지털 아트 창작 교육',
      '미술 기법 연습',
      '창의적 표현 활동'
    ],
    'AI 검색': [
      '신뢰할 수 있는 교육 자료 검색',
      '최신 교육 정보 수집',
      '연구 자료 정리 및 분석'
    ]
  };
  
  return examples[category] || ['다양한 교육 활동에 활용 가능'];
}

function openCompareModal() {
  const selectedToolsArray = Array.from(selectedTools).map(name => 
    toolsData.find(tool => tool.도구명 === name)
  );
  
  const modal = document.getElementById('compareModal');
  const modalBody = document.getElementById('compareModalBody');
  
  modalBody.innerHTML = createCompareTable(selectedToolsArray);
  
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function createCompareTable(tools) {
  if (tools.length === 0) return '<p>비교할 도구를 선택해주세요.</p>';
  
  const headers = ['항목', ...tools.map(tool => tool.도구명)];
  const rows = [
    ['카테고리', ...tools.map(tool => tool.카테고리)],
    ['주요 기능', ...tools.map(tool => tool.주요기능 || tool['주요 기능'])],
    ['가격', ...tools.map(tool => tool.가격)],
    ['대상', ...tools.map(tool => tool.대상)],
    ['활용도', ...tools.map(tool => `${tool.활용도}/5`)],
    ['난이도', ...tools.map(tool => `${tool.난이도}/3`)],
    ['특징', ...tools.map(tool => tool.특징)]
  ];
  
  return `
    <table class="compare-table">
      <thead>
        <tr>
          ${headers.map(header => `<th>${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr>
            ${row.map((cell, index) => `
              <td ${index === 0 ? 'style="font-weight: 600;"' : 'class="korean-text"'}>${cell}</td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function closeModal() {
  document.getElementById('toolModal').classList.remove('show');
  document.body.style.overflow = '';
}

function closeCompareModal() {
  document.getElementById('compareModal').classList.remove('show');
  document.body.style.overflow = '';
}
import { Product } from "./product";
export const productsData: Product[] = [
  {
    id: "1",
    title: "Nền tảng Backend Sinh Metadata bằng AI",
    subtitle:
      "Hệ thống sinh metadata video ngắn dựa trên LLM, xử lý bất đồng bộ",
    overview: {
      description:
        "Một nền tảng backend nội bộ chịu trách nhiệm tự động sinh và quản lý metadata (tiêu đề, mô tả) cho video ngắn, là một phần trong hệ thống tự động hóa quy mô lớn.",
      usage:
        "Được sử dụng bởi nhiều hệ thống tự động nội bộ như một bước hậu xử lý sau khi video được tạo.",
      environment:
        "Hệ thống production xử lý khối lượng lớn tác vụ bất đồng bộ",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Trước đây, metadata cho video được tạo thủ công bởi đội ngũ biên tập bằng các công cụ AI bên ngoài.",
      scale:
        "Hàng nghìn video được tạo mỗi ngày, yêu cầu một giải pháp sinh metadata có khả năng mở rộng và ổn định.",
      constraints: [
        "API LLM bên ngoài bị giới hạn tốc độ và định dạng phản hồi không ổn định",
        "Yêu cầu thông lượng xử lý cao",
        "Nhạy cảm về chi phí khi vận hành ở quy mô lớn",
      ],
    },
    problem: {
      description:
        "Việc sinh metadata thủ công không còn khả thi khi số lượng nội dung tăng mạnh.",
      painPoints: [
        "Tốn nhiều công sức thủ công và thời gian xử lý dài",
        "Chất lượng metadata không đồng nhất giữa các biên tập viên",
        "Giải pháp đồng bộ không đáp ứng được yêu cầu về quy mô và độ ổn định",
      ],
    },
    architecture: {
      pattern: "Xử lý batch bất đồng bộ với cơ chế điều phối dựa trên message",
      highLevelFlow: [
        "Job theo lịch truy vấn các video cần sinh metadata",
        "Dữ liệu video được publish lên Kafka",
        "Batch worker tiêu thụ message mỗi 3 phút để kiểm soát thông lượng",
        "Metadata được sinh qua các LLM và lưu vào cơ sở dữ liệu",
        "Các hệ thống downstream truy xuất metadata và theo dõi trạng thái sử dụng",
      ],
      components: [
        "Batch worker sử dụng Spring Boot",
        "Kafka topic cho xử lý chính và xử lý lỗi",
        "Lớp trừu tượng tích hợp LLM",
        "PostgreSQL lưu trữ metadata",
        "Redis lưu trạng thái xử lý tạm thời (nếu áp dụng)",
      ],
      failureHandling: [
        "Retry với backoff có kiểm soát",
        "Fallback tự động sang LLM khác",
        "Cách ly message lỗi bằng Kafka topic riêng",
      ],
    },
    llmStrategy: {
      providers: ["Gemini", "OpenAI", "Qwen", "DeepSeek"],
      design:
        "Thiết kế lớp trừu tượng thống nhất nhằm tách biệt logic nghiệp vụ khỏi từng nhà cung cấp LLM cụ thể.",
      features: [
        "Ưu tiên nhà cung cấp qua cấu hình",
        "Luân phiên API key để tránh rate limit",
        "Fallback tự động khi timeout hoặc phản hồi không hợp lệ",
        "Kiểm tra chặt chẽ định dạng phản hồi",
      ],
    },
    backendResponsibilities: [
      "Điều phối job và lập lịch xử lý",
      "Kiểm soát thông lượng batch",
      "Retry và cách ly lỗi",
      "Tối ưu prompt nhằm giảm chi phí",
      "Theo dõi mức độ tiêu thụ metadata",
    ],
    performance: {
      throughput: {
        bestCase: "≈25.000 bản ghi metadata/ngày",
        worstCase: "≈5.000 bản ghi/ngày",
      },
      processingModel:
        "Xử lý batch mỗi 3 phút để cân bằng độ trễ và độ ổn định API",
    },
    impact: {
      automation: "Tự động hóa hoàn toàn việc sinh metadata ở quy mô lớn",
      costOptimization: {
        inputTokenReduction: "≈80%",
        outputTokenReduction: "≈20%",
      },
      operationalBenefits: [
        "Giảm đáng kể khối lượng công việc thủ công",
        "Chất lượng metadata ổn định",
        "Hệ thống vận hành ổn định ngay cả khi tải cao",
      ],
    },
    role: {
      responsibilities: [
        "Thiết kế kiến trúc tổng thể hệ thống",
        "Triển khai luồng xử lý batch dựa trên Kafka",
        "Xây dựng cơ chế trừu tượng và fallback cho LLM",
        "Tối ưu prompt và chiến lược batch",
        "Đảm bảo độ ổn định và khả năng quan sát trong production",
      ],
      position: "Backend Developer",
    },
    techStack: {
      backend: ["Java", "Spring Boot"],
      messaging: ["Kafka"],
      database: ["PostgreSQL"],
      externalServices: ["Nhiều nhà cung cấp LLM"],
    },
    challengesAndTradeoffs: [
      "Cân bằng thông lượng xử lý với giới hạn API bên ngoài",
      "Lựa chọn batch processing thay vì xử lý đồng bộ để đảm bảo ổn định",
      "Thiết kế xử lý idempotent để retry an toàn",
      "Tối ưu chi phí mà vẫn giữ chất lượng đầu ra",
    ],
    category: "Nền tảng Backend Nội bộ",
    version: "Production",
    status: "ACTIVE",
  },

  {
    id: "2",
    title: "Pipeline Backend Sinh Video bằng AI",
    subtitle: "Pipeline bất đồng bộ dựa trên job để tự động tạo video ngắn",
    overview: {
      description:
        "Hệ thống backend nội bộ tự động hóa toàn bộ quá trình tạo video ngắn, từ sinh nội dung đến render video hoàn chỉnh bằng các dịch vụ AI.",
      usage:
        "Được sử dụng bởi đội ngũ nội dung để sản xuất video cho nhiều nền tảng video ngắn.",
      environment:
        "Hệ thống production đóng vai trò là pipeline sinh video cốt lõi.",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Quy trình sản xuất video trước đây bị phân mảnh, phụ thuộc vào nhiều bước thủ công và công cụ khác nhau.",
      scale:
        "Sản xuất video với khối lượng lớn, bao gồm các tác vụ AI chạy lâu và phụ thuộc dịch vụ bên ngoài.",
      constraints: [
        "Tác vụ chạy lâu và cần xử lý bất đồng bộ",
        "Độ ổn định không đồng đều của dịch vụ AI",
        "Yêu cầu retry an toàn và khả năng theo dõi trạng thái",
      ],
    },
    problem: {
      description:
        "Quy trình tạo video thủ công không còn phù hợp khi khối lượng nội dung tăng cao.",
      painPoints: [
        "Nhiều bước thủ công từ viết nội dung, TTS, subtitle đến chọn cảnh",
        "Tỷ lệ lỗi cao và khó debug",
        "Xử lý đồng bộ không phù hợp cho tác vụ dài",
      ],
    },
    pipelineDesign: {
      pattern: "Pipeline bất đồng bộ nhiều giai đoạn",
      input: [
        "Chủ đề video",
        "Cấu hình video (độ dài nội dung, giọng đọc, style subtitle)",
      ],
      stages: [
        {
          stage: "Sinh nội dung",
          description: "Sinh nội dung video có cấu trúc từ chủ đề đầu vào.",
        },
        {
          stage: "Giọng đọc & Subtitle",
          description: "Chuyển nội dung thành giọng nói và trích xuất phụ đề.",
        },
        {
          stage: "Chọn cảnh",
          description: "Trích xuất từ khóa để chọn các cảnh hình ảnh phù hợp.",
        },
        {
          stage: "Render video",
          description:
            "Kết hợp âm thanh, phụ đề và hình ảnh thành video hoàn chỉnh.",
        },
      ],
      dataFlow:
        "Kết quả của mỗi giai đoạn được lưu trữ và làm đầu vào cho giai đoạn tiếp theo.",
    },
    asyncProcessing: {
      queueSystem: "BullMQ",
      features: [
        "Điều phối job chạy lâu bằng queue",
        "Retry tự động với số lần cấu hình (mặc định: 3)",
        "Theo dõi trạng thái job xuyên suốt pipeline",
      ],
      failureHandling: [
        "Lưu trạng thái pipeline vào database",
        "Cho phép xử lý lại an toàn từ dữ liệu đã lưu",
        "Retry thủ công qua giao diện web khi vượt quá số lần retry",
      ],
    },
    backendResponsibilities: [
      "Điều phối pipeline và quản lý trạng thái job",
      "Đảm bảo xử lý idempotent, tránh sinh video trùng lặp",
      "Cung cấp API kích hoạt, theo dõi và retry pipeline",
      "Duy trì và tối ưu độ ổn định hệ thống",
    ],
    performance: {
      throughput: "Hơn 1.000 video ngắn mỗi ngày",
      processingModel:
        "Thực thi job bất đồng bộ với trạng thái pipeline được lưu trữ",
    },
    impact: {
      automation: "Tự động hóa toàn bộ quy trình tạo video ngắn",
      operationalBenefits: [
        "Giảm đáng kể công việc thủ công cho đội nội dung",
        "Tăng khả năng quan sát và debug lỗi",
        "Phục hồi an toàn khi pipeline gặp lỗi từng phần",
      ],
    },
    role: {
      responsibilities: [
        "Thiết kế kiến trúc pipeline bất đồng bộ",
        "Triển khai điều phối job bằng BullMQ",
        "Xây dựng logic idempotent cho từng giai đoạn",
        "Thiết kế cơ chế retry và phục hồi lỗi",
        "Phát triển API quản lý pipeline",
      ],
      position: "Backend Developer",
    },
    techStack: {
      backend: ["Node.js", "NestJS"],
      queue: ["BullMQ"],
      database: ["PostgreSQL"],
      aiServices: ["Sinh nội dung", "Text-to-speech", "Sinh subtitle"],
    },
    challengesAndTradeoffs: [
      "Quản lý job chạy lâu mà không block request",
      "Thiết kế pipeline idempotent để retry an toàn",
      "Xử lý lỗi từng phần trong pipeline nhiều giai đoạn",
      "Cân bằng thông lượng với độ ổn định dịch vụ AI",
    ],
    category: "Pipeline Backend Nội bộ",
    version: "Production",
    status: "ACTIVE",
  },

  {
    id: "3",
    title: "Backend Điều Phối Phân Phối Video & Quản Lý Kênh",
    subtitle: "Dịch vụ lập lịch và điều phối phân phối video ở quy mô lớn",
    overview: {
      description:
        "Dịch vụ backend nội bộ chịu trách nhiệm điều phối và lập lịch phân phối video trên hệ sinh thái kênh quy mô lớn.",
      usage:
        "Cung cấp dữ liệu phân phối video cho các hệ thống downstream thông qua API.",
      environment: "Hệ thống production hoạt động với tải cao hàng ngày.",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Việc phân phối video trước đây được thực hiện thủ công bởi operator trên nhiều nền tảng và kênh.",
      scale:
        "Gần 20.000 kênh được điều phối mỗi ngày với các ràng buộc phân phối nghiêm ngặt.",
      constraints: [
        "Số lượng kênh lớn và yêu cầu lập lịch hàng ngày",
        "Quy tắc không phân phối trùng video",
        "Yêu cầu theo dõi và báo cáo vận hành",
      ],
    },
    problem: {
      description:
        "Phân phối video thủ công không thể mở rộng khi hệ sinh thái kênh tăng mạnh.",
      painPoints: [
        "Chọn và đăng video thủ công cho từng kênh",
        "Không kiểm soát được số video mỗi kênh mỗi ngày",
        "Phân phối trùng video giữa các chu kỳ",
        "Thiếu khả năng quan sát trạng thái vận hành",
      ],
    },
    systemFlow: {
      pattern: "Dịch vụ điều phối và cung cấp dữ liệu theo lịch",
      input: [
        "Cấu hình lịch phân phối hàng ngày",
        "Trạng thái kênh và quy tắc phân phối",
      ],
      dailyScheduling: {
        executionTime: "00:00 giờ địa phương (17:00 UTC)",
        logic: [
          "Tính toán danh sách video cho từng kênh",
          "Áp dụng giới hạn phân phối theo kênh",
          "Đảm bảo không phân phối video trùng lặp",
        ],
      },
      distribution: {
        method: "Cơ chế pull thông qua API nội bộ",
        tracking: [
          "Định danh kênh",
          "Thời điểm truy xuất",
          "Trạng thái truy xuất",
        ],
        guarantees: [
          "Mỗi video chỉ được phân phối tối đa một lần cho mỗi kênh",
        ],
        nonGuarantees: [
          "Không đảm bảo video được đăng thành công lên nền tảng bên ngoài",
        ],
      },
    },
    channelManagement: {
      features: [
        "Quản lý trạng thái kênh (tự động / thủ công)",
        "Bật/tắt kênh",
        "Theo dõi metadata vận hành của kênh",
      ],
      apis: "REST API quản lý cấu hình và trạng thái kênh",
    },
    toolingAndAutomation: {
      crawling:
        "Công cụ crawler thu thập video ngắn từ nền tảng bên ngoài vào hệ thống lưu trữ nội bộ",
      automation: [
        "Workflow import dữ liệu hàng loạt",
        "Tự động hóa quản lý kênh bằng Airflow",
      ],
      monitoringAndReporting: [
        "Báo cáo phân phối theo giờ và theo ngày",
        "Gửi metric và cảnh báo vận hành qua Lark",
      ],
    },
    role: {
      responsibilities: [
        "Duy trì và mở rộng hệ thống production hiện có",
        "Phụ trách module báo cáo và thông báo vận hành",
        "Xây dựng công cụ tự động hỗ trợ quản lý dữ liệu và kênh",
        "Cải thiện độ ổn định crawler TikTok bằng cách thay đổi thư viện",
      ],
      position: "Backend Developer",
    },
    impact: {
      scale:
        "Điều phối phân phối video tự động cho khoảng 20.000 kênh mỗi ngày",
      operationalBenefits: [
        "Tăng độ ổn định của lịch phân phối hàng ngày",
        "Cải thiện khả năng quan sát vận hành",
        "Giảm đáng kể công sức quản lý thủ công",
      ],
    },
    techStack: {
      backend: ["NestJS"],
      database: ["PostgreSQL"],
      automation: ["Airflow"],
      integrations: ["Lark API", "Thư viện crawling video"],
    },
    challengesAndTradeoffs: [
      "Thiết kế logic phân bổ có thể mở rộng cho hàng chục nghìn kênh",
      "Đảm bảo không trùng phân phối mà không chặn hệ thống downstream",
      "Tách biệt trách nhiệm điều phối và thực thi đăng video",
      "Cân bằng giữa tự động hóa và an toàn vận hành",
    ],
    category: "Hệ Thống Điều Phối Backend Nội bộ",
    version: "Production",
    status: "ACTIVE",
  },
];

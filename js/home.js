import { renderSubBannerList } from "./utils";

(() => {
    const subBannerList = [
        { id: 1, title: 'chuẩn bị hành trang', description: 'Giúp các bạn trẻ có khả năng tiếp xúc với IELTS cùng giá cả phải chăng để trang bị hành trang vào đại học và cuộc sống.', thumbnail: 'sb-icon-1.png' },
        { id: 1, title: 'Giá cả phải chăng', description: 'Chúng mình luôn cố gắng hỗ trợ hết mình để các bạn sinh viên có thể học IELTS với giá thấp hơn thị trường nhưng chất lượng đảm bảo và uy tín.', thumbnail: 'sb-icon-2.png' },
        { id: 1, title: 'Học tập linh hoạt', description: 'Chúng mình chú trọng task-based learning và inductive teaching, tức học viên sẽ học phần lớn qua các hoạt động và trao đổi thảo luận với tutor.', thumbnail: 'sb-icon-3.png' },
    ];

    renderSubBannerList('subBannerList', subBannerList);
})();
import { renderSubBannerList } from "./utils";
import { dragableCarousel } from "./utils/carousel";


(() => {
    const subBannerList = [
        { 
            id: 1, title: 'chuẩn bị hành trang', 
            description: 'Giúp các bạn trẻ có khả năng tiếp xúc với IELTS cùng giá cả phải chăng để trang bị hành trang vào đại học và cuộc sống.', 
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-1.png?alt=media&token=020077e2-bca6-4664-abbf-cf1c735b1f83' 
        },
        { 
            id: 1, 
            title: 'Giá cả phải chăng', 
            description: 'Chúng mình luôn cố gắng hỗ trợ hết mình để các bạn sinh viên có thể học IELTS với giá thấp hơn thị trường nhưng chất lượng đảm bảo và uy tín.', 
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-2.png?alt=media&token=16856c5c-5dd9-4f2c-9ca9-96b2975eb259' 
        },
        { 
            id: 1, 
            title: 'Học tập linh hoạt', 
            description: 'Chúng mình chú trọng task-based learning và inductive teaching, tức học viên sẽ học phần lớn qua các hoạt động và trao đổi thảo luận với tutor.', 
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-3.png?alt=media&token=64160d00-fa86-40d8-9c1a-3c6418d72bb3' 
        },
    ];

    renderSubBannerList('subBannerList', subBannerList);
    dragableCarousel();
})();
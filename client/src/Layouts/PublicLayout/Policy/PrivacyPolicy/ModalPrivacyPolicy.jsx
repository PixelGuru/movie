import { useState } from "react";
import { ContentPolicy, StyleModal, StyledButton } from "../FAQ's/styled";
const ModalPrivacyPolicy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <StyledButton type="link" onClick={showModal}>
                Điều khoản bảo mật
            </StyledButton>
            <StyleModal
                title="Điều khoản bảo mật"
                open={isModalOpen}
                onCancel={handleCancel}
                width={1000}
                style={{ top: 20 }}
            >
                <ContentPolicy>
                    <strong>1. Mục đích và phạm vi thu thập</strong>
                    <p>
                        Việc thu thập thông tin cá nhân được thực hiện trên cơ
                        sở khách hàng tự khai báo để đăng ký thành viên
                        Startlight tại website www.Startlight.vn, tùy từng thời
                        điểm, thông tin thu thập sẽ bao gồm nhưng không giới hạn
                        ở: - Thông tin cá nhân như: họ tên, giới tính, độ tuổi,
                        số CMND - Thông tin liên lạc như: địa chỉ, số điện thoại
                        di động, email - Các thông tin khác phục vụ cho chương
                        trình khách hàng thân thiết (nếu có) ** Mục đích thu
                        thập thông tin khách hàng bao gồm: - Cung cấp các dịch
                        vụ, sản phẩm theo nhu cầu của khách hàng - Liên hệ xác
                        nhận khi khách hàng đăng ký sử dụng dịch vụ, xác lập
                        giao dịch trên website www.Startlight.vn - Thực hiện
                        việc quản lý website www.Startlight.vn, gửi thông tin
                        cập nhật về website, các chương trình khuyến mại, ưu
                        đãi/tri ân tới khách hàng - Bảo đảm quyền lợi của khách
                        hàng khi phát hiện các hành động giả mạo, phá hoại tài
                        khoản, lừa đảo khách hàng - Liên lạc, hỗ trợ, giải quyết
                        với khách hàng trong các trường hợp đặc biệt - Để tránh
                        nghi ngờ, trong quá trình giao dịch thanh toán tại
                        website www.Startlight.vn, Startlight chỉ lưu giữ thông
                        tin chi tiết về đơn hàng đã thanh toán của khách hàng,
                        các thông tin về tài khoản ngân hàng của khách hàng sẽ
                        không được lưu giữ.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>2. Phạm vi sử dụng thông tin</strong>
                    <p>
                        - Startlight chỉ sử dụng thông tin cá nhân của khách
                        hàng cho các mục đích quy định (tại Mục I) hoặc mục đích
                        khác (nếu có) với điều kiện đã thông báo và được sự đồng
                        ý của khách hàng. - Startlight không sử dụng thông tin
                        cá nhân của khách hàng để gửi quảng cáo, giới thiệu dịch
                        vụ và các thông tin có tính thương mại của bên thứ 3
                        không phải Startlight khi chưa được khách hàng chấp
                        thuận. - Khách hàng hiểu và đồng ý rằng Startlight có
                        nghĩa vụ phải cung cấp thông tin khách hàng theo yêu
                        cầu/quyết định của Cơ quan nhà nước có thẩm quyền
                        và/hoặc quy định pháp luật. Startlight sẽ được miễn trừ
                        mọi trách nhiệm liên quan đến bảo mật thông tin trong
                        trường hợp này.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>3. Thời gian lưu trữ thông tin</strong>
                    <p>
                        {" "}
                        Dữ liệu cá nhân của thành viên sẽ được lưu trữ cho đến
                        khi có yêu cầu ban quản trị hủy bỏ. Còn lại trong mọi
                        trường hợp thông tin cá nhân thành viên sẽ được bảo mật
                        trên máy chủ của chúng tôi
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        4. Những người hoặc tổ chức có thể được tiếp cận với
                        thông tin cá nhân
                    </strong>
                    <p>
                        Đối tượng được tiếp cận với thông tin cá nhân của khách
                        hàng thuộc một trong những trường hợp sau: - Nhân viên
                        của công ty Startlight - Các đối tác có ký hợp động thực
                        hiện 1 phần dịch vụ của công ty, các đối tác này sẽ nhận
                        được những thông tin theo thỏa thuận hợp đồng (có thể 1
                        phần hoặc toàn bộ thông tin tuy theo điều khoản hợp
                        đồng) để tiến hành hỗ trợ người dùng sử dụng dịch vụ do
                        Công ty cung cấp.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        5. Địa chỉ của đơn vị thu nhập và quản lý thông tin cá
                        nhân
                    </strong>
                    <p>
                        - Công ty Cổ phần Startlight - Địa chỉ:
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx, Tp. Hồ Chí Minh. -
                        Hotline: 1900 1234 - Email hỗ trợ: cskh@Startlight.vn
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong></strong>
                    <p></p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        6. Phương tiện và công cụ để người dùng tiếp cận và
                        chỉnh sửa dữ hiệu cá nhân của mình
                    </strong>
                    <p>
                        Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh
                        hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ
                        với ban quản trị website. Thành viên có quyền gửi khiếu
                        nại về nội dung bảo mật thông tin đề nghị liên hệ Ban
                        quản trị của website. Khi tiếp nhận những phản hồi này,
                        chúng tôi sẽ xác nhận lại thông tin, trường hợp đúng như
                        phản ánh của thành viên tùy theo mức độ, chúng tôi sẽ có
                        những biện pháp xử lý kịp thời.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        7. Cơ chế tiếp cận và giải quyết khiếu nại của người
                        tiêu dùng
                    </strong>
                    <p>
                        - Mọi tranh chấp phát sinh giữa Công ty và Người dùng sẽ
                        được giải quyết trên cơ sở thương lượng. Trường hợp
                        không đạt được thỏa thuận như mong muốn, một trong hai
                        bên có quyền đưa vụ việc ra Tòa án nhân dân có thẩm
                        quyền để giải quyết. - Khi không giải quyết được qua
                        thương lượng, hòa giải như trên, bên bị vi phạm tập hợp
                        các chứng cứ như email, tin nhắn … và liên lạc với Công
                        ty. Công ty sẽ liên lạc lại với người khiếu nại để giải
                        quyết. - Nếu vụ việc vượt quá thẩm quyền của mình, Công
                        ty sẽ đề nghị chuyển vụ việc cho các cơ quan chức năng
                        có thẩm quyền. Trong trường hợp này, Công ty vẫn phối
                        hợp hỗ trợ để bảo vệ tốt nhất bên bị vi phạm. - Thông
                        tin cá nhân của thành viên được cam kết bảo mật tuyệt
                        đối theo chính sách bảo vệ thông tin cá nhân. Việc thu
                        thập và sử dụng thông tin của mỗi thành viên chỉ được
                        thực hiện khi có sự đồng ý của khách hàng đó trừ những
                        trường hợp pháp luật có quy định khác. Không sử dụng,
                        không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3
                        nào về thông tin cá nhân của thành viên khi không có sự
                        cho phép đồng ý từ thành viên. - Trong trường hợp máy
                        chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát
                        dữ liệu cá nhân thành viên, chúng tôi sẽ có trách nhiệm
                        thông báo vụ việc cho cơ quan chức năng điều tra xử lý
                        kịp thời và thông báo cho thành viên được biết. - Bảo
                        mật tuyệt đối mọi thông tin giao dịch trực tuyến của
                        thành viên bao gồm thông tin hóa đơn kế toán chứng từ số
                        hóa Ban quản lý yêu cầu các cá nhân khi đăng ký/mua hàng
                        phải cung cấp đầy đủ thông tin cá nhân có liên quan như:
                        Họ và tên, địa chỉ liên lạc, email, điện thoại,…., và
                        chịu trách nhiệm về tính pháp lý của những thông tin
                        trên. - Ban quản lý không chịu trách nhiệm cũng như
                        không giải quyết mọi khiếu nại có liên quan đến quyền
                        lợi của thành viên đó nếu xét thấy tất cả thông tin cá
                        nhân của thành viên đó cung cấp khi đăng ký ban đầu là
                        không chính xác.
                    </p>
                </ContentPolicy>
            </StyleModal>
        </>
    );
};
export default ModalPrivacyPolicy;

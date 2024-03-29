import { useState } from "react";
import { ContentPolicy, StyleModal, StyledButton } from "../FAQ's/styled";
const ModalPaymentPolicy = () => {
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
                Điều khoản giao dịch
            </StyledButton>
            <StyleModal
                title="Điều khoản giao dịch"
                open={isModalOpen}
                onCancel={handleCancel}
                width={1000}
                style={{ top: 20 }}
            >
                <ContentPolicy>
                    <strong>1. Phạm Vi</strong>
                    <p>
                        Áp Dụng Điều kiện dưới đây áp dụng riêng cho chức năng
                        mua vé trực tuyến tại Website. Khi sử dụng chức năng để
                        đặt chỗ và mua vé, Quý khách mặc nhiên đã chấp thuận và
                        tuân thủ tất cả các chỉ dẫn, điều khoản, điều kiện và
                        lưu ý đăng tải trên Website, bao gồm nhưng không giới
                        hạn bởi Điều kiện Sử dụng nêu ở đây. Nếu Quý khách không
                        có ý định mua vé trực tuyến hay không đồng ý với bất kỳ
                        điều khoản hay điều kiện nào nêu trong Điều kiện Sử
                        dụng, xin hãy DỪNG VIỆC SỬ DỤNG chức năng này.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>2. Điều kiện sử dụng</strong>
                    <p>
                        tính năng mua vé trực tuyến Quý khách phải đăng ký tài
                        khoản với thông tin xác thực về bản thân và phải cập
                        nhật nếu có bất kỳ thay đổi nào. Mỗi người truy cập phải
                        có trách nhiệm với mật khẩu, tài khoản và hoạt động của
                        mình trên web. Hơn nữa, quý khách phải thông báo cho
                        chúng tôi biết khi tài khoản bị truy cập trái phép.
                        Chúng tôi không chịu bất kỳ trách nhiệm nào, dù trực
                        tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát
                        gây ra do quý khách không tuân thủ quy định.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>3. Quy định về đặt</strong>
                    <p>
                        vé trực tuyến - Tính năng đặt vé trực tuyến hiện chỉ áp
                        dụng cho thành viên của Startlight. Vui lòng tham khảo thông
                        tin đăng ký thành viên trên website www.Startlight.vn.- Thông
                        thường, Startlight mở bán vé trực tuyến trước ngày chiếu phim,
                        tuy nhiên điều này phụ thuộc vào mỗi phim, mỗi rạp. Nếu
                        suất chiếu bạn muốn đặt chưa được hiển thị trên website
                        vào thời điểm khách đặt vé, xin vui lòng quay lại sau,
                        hoặc liên hệ tới số hot line của Startlight 1900 6017 để biết
                        thêm thông tin chi tiết.- Thời gian đóng chức năng mua
                        vé trực tuyến là 30 phút trước giờ chiếu phim hoặc khi
                        suất chiếu đã được bán hết vé. Sau thời gian này quý
                        khách có thể đến liên hệ trực tiếp tại rạp để mua vé.-
                        Startlight không cam kết giữ chỗ ngồi cho quý khách cho đến khi
                        quý khách hoàn tất thanh toán cho đơn hàng của mình.-
                        Khách hàng có thể đặt chỗ cho tối đa 8 khách (không bao
                        gồm vé trẻ em) trong mỗi lần thực hiện.- Khi tiến hành
                        các bước thanh toán, cần đọc kĩ các thông tin trên màn
                        hình về rạp chiếu phim, tên phim, suất chiếu, và chỗ
                        ngồi trước khi hoàn tất việc xác nhận tất cả các thông
                        tin về vé.- Quý khách thanh toán giao dịch đặt vé theo
                        quy định tại Chính Sách Thanh Toán đăng tải trên Startlight
                        trước khi nhận mã đặt vé của giao dịch đó. Khi quý khách
                        nhấn (click) vào ô “Thanh toán” để tiến hành thanh toán
                        Đặt chỗ có nghĩa là đã xác nhận rà soát thông tin Đặt
                        chỗ; và đồng ý là Điều Khoản Và Điều Kiện sẽ được áp
                        dụng cho giao dịch mua vé trong giao dịch đó.- Email và
                        tin nhắn xác nhận đặt vé sau khi hoàn thành việc thanh
                        toán vé trực tuyến, quý khách sẽ nhận được thư xác nhận
                        thông tin chi tiết vé đã thanh toán thông qua địa chỉ
                        thư điện tử (email) mà quý khách đã cung cấp. Email xác
                        nhận thông tin đặt vé có thể đi vào hộp thư rác (spam
                        mail) của bạn, vì vậy hãy kiểm tra chúng trước khi liên
                        lạc với Startlight.- Bằng việc thanh toán qua website này, quý
                        khách chấp nhận vị trí ghế ngồi mà bạn đã đặt. Quý khách
                        đồng ý rằng, trong những trường hợp có sự thay đổi về
                        chương trình phim hoặc bất khả kháng, Startlight có quyền hoàn
                        trả lại bất kỳ vé nào từ việc mua bán qua trang web này
                        hoặc thực hiện việc chuyển vé cho bạn qua suất chiếu
                        khác theo yêu cầu của quý khách.- Trong suốt quá trình
                        đăng ký, quý khách đồng ý nhận email quảng cáo từ
                        website. Sau đó, nếu không muốn tiếp tục nhận mail, quý
                        khách có thể từ chối bằng cách nhấp vào đường link ở
                        dưới cùng trong mọi email quảng cáo.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong> 4. Giá Vé</strong>
                    <p>
                        - Giá vé được niêm yết tại Startlight là giá bán cuối cùng đã
                        bao gồm thuế Giá trị gia tăng (VAT). Giá vé có thể thay
                        đổi tùy thời điểm và chương trình khuyến mãi kèm theo và
                        sẽ được hiển thị rõ tại trang Thanh toán khi quý khách
                        tiến hành đặt hàng.- Giá vé khi đặt vé trực tuyến trên
                        website và ứng dụng Startlight là giá vé người lớn. Các loại vé
                        như học sinh-sinh viên, vé trẻ em và người cao tuổi vui
                        lòng mua trực tiếp tại quầy vé tại các rạp Startlight Cinemas.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong> 5. Phân loại phim theo độ tuổi:</strong>
                    <p>
                        - Căn cứ Luật Điện ảnh của Bộ trưởng Bộ Văn Hóa, Thể
                        thao, Du lịch ngày 15/06/2022. Startlight thông báo tiêu chí
                        phân loại phim theo lứa tuổi, như sau:o P: Phim được
                        phép phổ biến đến người xem ở mọi độ tuổi.o K: Phim được
                        phổ biến đến người xem dưới 13 tuổi và có người bảo hộ
                        đi kèm.o C13 (T13): Phim được phổ biến đến người xem từ
                        đủ 13 tuổi trở lên (13+).o C16 (T16): Phim được phổ biến
                        đến người xem từ đủ 16 tuổi trở lên (16+).o C18 (T18):
                        Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên
                        (18+).o C: Phim không được phép phổ biến.Lưu ý:- Khán
                        giả xem phim T13, T16, T18 vui lòng mang theo giấy tờ
                        tùy thân hoặc hình ảnh của giấy tờ tùy thân có ảnh nhận
                        diện và ngày tháng năm sinh để đảm bảo việc tuân thủ
                        theo quy định.- Ban Quản Lý Rạp có quyền kiểm tra và từ
                        chối khách hàng nếu không đúng quy định về độ tuổi.- Về
                        tài liệu xác minh: Startlight có quyền yêu cầu khách hàng- Xuất
                        trình giấy tờ tùy thân có ảnh hoặc tài liệu liên quan
                        chứng minh chính xác thông tin hoặc tình trạng của khách
                        hàng (vd: Giấy khai sinh, CCCD, thẻ học sinh,…)- Đối với
                        khách hàng trẻ em không thể xác minh qua giấy tờ tùy
                        thân (do không mang theo hoặc mất mát,...) khách hàng
                        cần đủ điều kiện chiều cao dưới 130cm.Về hình thức chế
                        tài:Phạt tiền từ 60.000.000 đồng đến 80.000.000 đồng đối
                        với hành vi không đảm bảo người xem phim đúng độ tuổi
                        theo phân loại phim.QUY ĐỊNH VỀ KHUNG GIỜ CHIẾU PHIM CHO
                        TRẺ EMCăn cứ Luật Điện ảnh của Bộ trưởng Bộ Văn Hóa, Thể
                        thao, Du lịch ngày 15/06/2022, Startlight thông báo áp dụng quy
                        định về khung giờ chiếu phim cho trẻ em* như sau:(*) Trẻ
                        em: Là khách hàng dưới 16 tuổi (căn cứ vào năm sinh của
                        Khách Hàng) hoặc cao dưới 130cm (đối với một số trường
                        hợp)- Giờ chiếu phim cho trẻ em dưới 13 tuổi tại rạp kết
                        thúc trước 22 giờ.- Giờ chiếu phim cho trẻ em dưới 16
                        tuổi tại rạp kết thúc trước 23 giờ.Để thực hiện theo quy
                        định hiện hành, Startlight có quyền kiểm tra và từ chối Khách
                        Hàng nếu không đúng quy định về độ tuổi, cụ thể:Về tài
                        liệu để kiểm tra độ tuổi và tình trạng của khách hàng
                        gồm:- Trường hợp Khách Hàng có đầy đủ giấy tờ tùy thân:
                        Yêu cầu xuất trình giấy tờ tùy thân có ảnh hoặc tài liệu
                        liên quan chứng minh chính xác thông tin hoặc tình trạng
                        của khách hàng (vd: Giấy khai sinh, CCCD, thẻ học
                        sinh,…)- Trường hợp Khách Hàng không có đủ giấy tờ tùy
                        thân: do không mang theo hoặc mất mát,…khách hàng cần đủ
                        điều kiện có chiều cao dưới 130cm.Về hình thức chế
                        tài:Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng đối
                        với hành vi không đảm bảo khung giờ chiếu phim cho trẻ
                        em quy định.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        6. Giá trị giao dịch và hình thức thanh toán:
                    </strong>
                    <p>
                        - Startlight cung cấp các hình thức thanh toán: thẻ Thanh toán
                        Quốc tế hoặc thẻ Thanh toán Nội địa, ứng dụng thanh toán
                        (Momo, Zalopay, ShopeePay, …), thẻ quà Tặng Startlight, Startlight
                        Voucher và bằng điểm thưởng thành viên.- Trừ một số
                        trường hợp có ghi chú riêng, thông thường quý khách có
                        thể lựa chọn một trong các hình thức thanh toán trên khi
                        tiến hành đặt vé.- Startlight có quyền từ chối chấp nhận cho
                        Khách Hàng thanh toán bằng thẻ tín dụng trong một số
                        trường hợp theo quyết định của Startlight.- Để đảm bảo an toàn
                        thanh toán, Khách Hàng lưu ý:o Chỉ thực hiện thanh toán
                        trực tuyến tại cửa sổ liên kết từ Startlight chuyển đến;o Sử
                        dụng và bảo quản thẻ (thẻ tín dụng, thẻ ATM, thẻ mua
                        hàng…) và thông tin tài khoản/thông tin thẻ cẩn thận;o
                        Không cho người khác mượn hoặc sử dụng thẻ thành viên để
                        mua vé tại Startlight. Ngay khi phát hiện giao dịch phát sinh
                        bất thường nào tại Startlight, Khách Hàng cần liên hệ ngay với
                        bộ phận chăm sóc Khách Hàng của Startlight để được xử lý kịp
                        thời;o Trong mọi trường hợp, với thẻ tín dụng/ghi nợ
                        quốc tế, Khách Hàng vui lòng không để lộ số CVV/CVC/CSC
                        (là mã số bảo mật, bộ ba kí tự số được in ở mặt sau của
                        thẻ) để bảo mật thông tin thẻ;o Kiểm tra tài khoản ngân
                        hàng của mình thường xuyên để đảm bảo tất cả giao dịch
                        qua thẻ đều nằm trong tầm kiểm soát.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong> 7. Điểm thưởng và đổi điểm:</strong>
                    <p>
                        - Quy định về tích lũy và quy đổi điểm thưởng được thực
                        hiện theo chính sách cụ thể của Startlight tại từng thời điểm.
                        - Startlight khuyến khích Khách Hàng đăng ký tài khoản thành
                        viên trên Startlight để tiện theo dõi lịch sử giao dịch, nhận
                        thông tin cập nhật về hàng hóa, các chương trình khuyến
                        mại, hưởng các ưu đãi đối với khách hàng thân thiết…
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>8. Giao kết giao dịch tại Startlight</strong>
                    <p>
                        Khách hàng khi mua vé trực tuyến tại website và ứng dụng
                        Startlight phải đăng nhập tài khoản thành viên Startlight và thực hiện
                        các thao tác theo trình tự sau: o Bước 1: Khách hàng lựa
                        chọn suất chiếu theo phim hoặc suất chiếu theo rạp.o
                        Bước 2: Khách hàng lựa chọn chỗ ngồi.o Bước 3: Thanh
                        toán bằng các hình thức thanh toán online qua thẻ tín
                        dụng (Visa, Master card..), thẻ ATM, ứng dụng thanh toán
                        (Momo, Zalopay, ShopeePay,…), điểm thưởng thành viên,
                        Thẻ quà tặng Startlight, Startlight Voucher.o Bước 4: Khách hàng nhận
                        mã đặt chỗ tại websitie, ứng dụng Startlight và email.o Bước 5:
                        Khách hàng cung cấp mã đặt vé và các thông tin tài khoản
                        thành viên Startlight dùng để đặt vé để nhận vé tại rạp. Khách
                        hàng chỉ có thể nhận vé tại rạp đã đặt vé coi phim. Nếu
                        khách hàng không cung cấp được thông tin tài khoản Startlight
                        và mã đặt vé, Startlight có quyền từ chối xuất vé.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        9. Thay đổi, hủy bỏ giao dịch đặt vé tại Startlight
                    </strong>
                    <p>
                        - Hiện tại Startlight đã ra mắt chức năng “Hoàn vé chủ động”,
                        Qua chức năng này của Startlight, khách hàng có thể hủy suất
                        chiếu của mình đã đặt trước và đặt lại xem vào dịp khác
                        thuận tiện hơn mà không cần phải liên lạc với đội ngũ hỗ
                        trợ khách hàng của Startlight. Khách hàng có thể tham khảo thêm
                        về điều kiện và quy định hoàn vé tại đây. - Startlight chưa hỗ
                        trợ dịch vụ hủy hoặc thay đổi thông tin vé đã thanh toán
                        thành công nếu quý khách không thỏa điều kiện sử dụng
                        chức năng “Hoàn vé chủ động” của Startlight. - Hệ thống Đặt vé
                        Online của Startlight có liên kết với rất nhiều đối tác khác,
                        bao gồm Cổng thanh toán ONEPAY, các ngân hàng nội địa và
                        các Tổ chức tín dụng quốc tế. Việc thanh toán thành công
                        hay không phụ thuộc rất nhiều vào kết nối mạng của quý
                        khách , việc truyền dẫn, nhận và trả tín hiệu của các tổ
                        chức đối tác trên. Startlight chỉ thực hiện hoàn tiền trong
                        trường hợp khi giao dịch, tài khoản của quý khách đã bị
                        trừ tiền nhưng hệ thống của chúng tôi không ghi nhận
                        việc đặt vé đó, và quý khách không nhận được xác nhận
                        đặt vé thành công. Khi đó, quý khách vui lòng liên hệ
                        hotline 1900 6017 (từ 8:00 đến 22:00 tất cả các ngày
                        trong tuần) hoặc bạn có thể liên hệ với chúng tôi qua
                        địa chỉ email hoidap@Startlight.vn để được hỗ trợ.- Sau khi đã
                        xác nhận các thông tin của khách hàng cung cấp về giao
                        dịch không thành công, tùy theo từng loại tài khoản
                        khách hàng sử dụng mà việc hoàn tiền sẽ có thời gian
                        khác nhau:o Thẻ ATM ( Nội địa): hoàn tiền trong 07-15
                        ngày (không tính cuối tuần và ngày lễ)o Thẻ
                        Visa/Mastercard/JCB( Quốc tế): hoàn tiền trong 07-30
                        ngày (không tính cuối tuần và ngày lễ).o Riêng các giao
                        dịch thanh toán bằng tiền trong ví điện tử: sẽ được hoàn
                        trực tiếp vào số dư ví trong vòng 05-10 ngày (không tính
                        cuối tuần và ngày lễ). Còn các trường hợp thanh toán
                        bằng ví nhưng thông qua liên kết thẻ sẽ tương tự 2
                        trường hợp thẻ nội địa và quốc tế như trên. *Lưu ý: Thời
                        gian hoàn tiền không tính các ngày thứ 7, Chủ nhật và Lễ
                        Tết.- Trước khi thanh toán vé trực tuyến, chúng tôi
                        khuyên quý khách nên xác nhận lại Tên phim, Độ tuổi, Giờ
                        chiếu và Rạp chiếu của bộ phim muốn xem.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong> 10. Thương hiệu và bản quyền:</strong>
                    <p>
                        Mọi quyền sở hữu trí tuệ (đã đăng ký hoặc chưa đăng ký),
                        nội dung thông tin và tất cả các thiết kế, văn bản, đồ
                        họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, biên
                        dịch phần mềm, mã nguồn và phần mềm cơ bản đều là tài
                        sản của Startlight. Toàn bộ nội dung của trang web được bảo vệ
                        theo pháp luật sở hữu trí tuệ của Việt Nam và các công
                        ước, điều ước quốc tế mà Việt Nam tham gia hoặc là thành
                        viên.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>11. Luật áp dụng và giải quyết tranh chấp</strong>
                    <p>
                        Các điều kiện, điều khoản và nội dung của trang web này
                        được điều chỉnh và giải thích theo luật pháp Việt Nam.
                        Các tranh chấp phát sinh từ hoặc liên quan đến (các)
                        giao dịch thực hiện tại trang web này sẽ được ưu tiên
                        giải quyết thông qua thương lượng, hòa giải. Trường hợp
                        các bên không tự giải quyết, tranh chấp sẽ được đưa ra
                        xét xử tại Tòa án cấp có thẩm quyền của Việt Nam.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>12. Quy định về bảo mật</strong>
                    <p>
                        Trang web của chúng tôi coi trọng việc bảo mật thông tin
                        và sử dụng các biện pháp tốt nhất bảo vệ thông tin và
                        việc thanh toán của quý khách. Thông tin của quý khách
                        trong quá trình thanh toán sẽ được mã hóa để đảm bảo an
                        toàn. Sau khi quý khách hoàn thành quá trình đặt hàng,
                        quý khách sẽ thoát khỏi chế độ an toàn. Quý khách không
                        được sử dụng bất kỳ chương trình, công cụ hay hình thức
                        nào khác để can thiệp vào hệ thống hay làm thay đổi cấu
                        trúc dữ liệu. Trang web cũng nghiêm cấm việc phát tán,
                        truyền bá hay cổ vũ cho bất kỳ hoạt động nào nhằm can
                        thiệp, phá hoại hay xâm nhập vào dữ liệu của hệ thống.
                        Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi
                        cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
                        Mọi thông tin giao dịch sẽ được bảo mật trừ trường hợp
                        buộc phải cung cấp theo yêu cầu của tòa án, (các) cơ
                        quan có thẩm quyền hoặc theo quy định của pháp luật.
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>
                        13. Giải quyết hậu quả do lỗi nhập sai thông tin thương
                        mại tại Startlight
                    </strong>
                    <p>
                        Khách hàng có trách nhiệm cung cấp thông tin đầy đủ và
                        chính xác khi tham gia giao dịch tại Startlight. Trong trường
                        hợp khách hàng nhập sai thông tin tại trang thông tin My
                        Startlight, Startlight có quyền từ chối thực hiện giao dịch. Ngoài ra,
                        trong mọi trường hợp, khách hàng đều có quyền đơn phương
                        chấm dứt giao dịch nếu đã thực hiện bằng cách thông báo
                        cho Startlight qua đường dây nóng 1900 6017
                    </p>
                </ContentPolicy>
                <ContentPolicy>
                    <strong>14. Quy định chấm dứt thỏa thuận</strong>
                    <p>
                        Trong trường hợp có bất kỳ thiệt hại nào phát sinh do
                        việc vi phạm Quy Định sử dụng trang web, chúng tôi có
                        quyền đình chỉ hoặc khóa tài khoản của quý khách vĩnh
                        viễn. Nếu quý khách không hài lòng với trang web hoặc
                        bất kỳ điều khoản, điều kiện, quy tắc, chính sách, hướng
                        dẫn, hoặc cách thức vận hành của Startlight thì biện pháp khắc
                        phục duy nhất là ngưng sử dụng dịch vụ của chúng tôi.
                        Xin quý khách lưu ý chỉ mua hàng khi chấp nhận và hiểu
                        rõ những quy định trên. Nếu cần hỗ trợ thêm thông tin,
                        quý khách vui lòng tham khảo tại www.Startlight.vn
                    </p>
                </ContentPolicy>
            </StyleModal>
        </>
    );
};
export default ModalPaymentPolicy;

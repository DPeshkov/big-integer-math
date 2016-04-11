function DIV_PP_P(A, B)
{
	//������� ���������� ���������� �� ���. 74 �� JS
	//������� �� ������� ���������� �� ��������� ��� ������� � ��������
	//������ �����, ��. 5301
	if(DEG_P_N(A) >= DEG_P_N(B)) //������ � ���� ������ ���� ������� a>=b 
	{
		var R = A, Q = [], T = []; //A = BQ + R (A - �������, B - ��������, Q - �������, R - �������)
		while(DEG_P_N(R) >= DEG_P_N(B))
		{
			T = MUL_Pxk_P([DIV_QQ_Q(LED_P_Z(R), LED_P_Z(B))], DEG_P_N(R) - DEG_P_N(B)); //T = l(R)/l(B) * x^(deg(A)-deg(B))
			Q = ADD_PP_P(Q, T); //Q = Q+T
			R = SUB_PP_P(R, MUL_PP_P(T, B)); //R = R - TB
		}
		return Q; 
	}
	else
		return TRAN_Z_Q(TRAN_N_Z({d:[0],s:1})); //������� 0
}